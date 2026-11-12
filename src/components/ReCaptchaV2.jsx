"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef, useState } from "react";

// Google official reCAPTCHA v2 Test Key (always passes for local testing if no env key provided)
const DEFAULT_TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const ReCaptchaV2 = forwardRef(function ReCaptchaV2(
  {
    onVerify,
    onExpire,
    onError,
    theme = "light",
    size = "normal",
    className = "",
  },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || DEFAULT_TEST_SITE_KEY;

  useImperativeHandle(ref, () => ({
    reset: () => {
      try {
        if (
          widgetIdRef.current !== null &&
          typeof window !== "undefined" &&
          window.grecaptcha &&
          window.grecaptcha.reset
        ) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      } catch (e) {
        console.warn("reCAPTCHA reset warning:", e);
      }
    },
    getResponse: () => {
      try {
        if (
          widgetIdRef.current !== null &&
          typeof window !== "undefined" &&
          window.grecaptcha &&
          window.grecaptcha.getResponse
        ) {
          return window.grecaptcha.getResponse(widgetIdRef.current);
        }
      } catch (e) {}
      return "";
    },
  }));

  useEffect(() => {
    let isMounted = true;
    let pollInterval = null;

    const renderWidget = () => {
      if (!isMounted || !containerRef.current) return;
      if (widgetIdRef.current !== null) return;
      if (!window.grecaptcha || typeof window.grecaptcha.render !== "function") return;

      try {
        // Clear any old child elements in case of re-mount
        if (containerRef.current.innerHTML !== "") {
          containerRef.current.innerHTML = "";
        }

        const id = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme: theme,
          size: size,
          callback: (token) => {
            if (onVerify) onVerify(token);
          },
          "expired-callback": () => {
            if (onExpire) onExpire();
          },
          "error-callback": () => {
            if (onError) onError();
          },
        });
        widgetIdRef.current = id;
        setIsReady(true);

        if (pollInterval) {
          clearInterval(pollInterval);
          pollInterval = null;
        }
      } catch (err) {
        console.warn("reCAPTCHA render notice:", err.message);
      }
    };

    const tryReadyAndRender = () => {
      if (window.grecaptcha) {
        if (typeof window.grecaptcha.ready === "function") {
          window.grecaptcha.ready(() => {
            if (isMounted) renderWidget();
          });
        } else if (typeof window.grecaptcha.render === "function") {
          renderWidget();
        }
      }
    };

    // If already loaded on window
    if (typeof window !== "undefined" && window.grecaptcha && typeof window.grecaptcha.render === "function") {
      tryReadyAndRender();
    } else {
      // Setup global callback
      const callbackName = "onRecaptchaV2LoadCallback";
      window[callbackName] = () => {
        if (isMounted) tryReadyAndRender();
      };

      // Check if script tag is in document
      let script = document.getElementById("recaptcha-v2-script");
      if (!script) {
        script = document.createElement("script");
        script.id = "recaptcha-v2-script";
        script.src = `https://www.google.com/recaptcha/api.js?onload=${callbackName}&render=explicit`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (isMounted) tryReadyAndRender();
        };
        document.head.appendChild(script);
      } else {
        // Script is already in DOM: poll until window.grecaptcha.render is ready
        tryReadyAndRender();
      }

      // Interval fallback for SPAs where script tag exists but window.grecaptcha is still initializing
      let attempts = 0;
      pollInterval = setInterval(() => {
        attempts++;
        if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
          tryReadyAndRender();
        }
        if (attempts > 50 || widgetIdRef.current !== null) {
          clearInterval(pollInterval);
          pollInterval = null;
        }
      }, 100);
    }

    return () => {
      isMounted = false;
      if (pollInterval) {
        clearInterval(pollInterval);
      }
    };
  }, [siteKey, theme, size, onVerify, onExpire, onError]);

  return (
    <div className={`recaptcha-v2-wrapper flex justify-start my-2 ${className}`}>
      <div
        ref={containerRef}
        className="min-h-[78px] min-w-[304px] flex items-center justify-start rounded-xl overflow-hidden"
      />
    </div>
  );
});

export default ReCaptchaV2;
