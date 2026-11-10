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

    const renderWidget = () => {
      if (!isMounted || !containerRef.current) return;
      if (!window.grecaptcha || !window.grecaptcha.render) return;

      // Avoid double render
      if (widgetIdRef.current !== null) return;

      try {
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
      } catch (err) {
        // May happen in fast HMR, ignore gracefully
      }
    };

    // Check if grecaptcha is already available
    if (typeof window !== "undefined" && window.grecaptcha && window.grecaptcha.render) {
      renderWidget();
    } else {
      // Create callback
      const callbackName = "onRecaptchaV2LoadCallback";
      window[callbackName] = () => {
        if (isMounted) renderWidget();
      };

      // Inject script if not already in document
      let script = document.getElementById("recaptcha-v2-script");
      if (!script) {
        script = document.createElement("script");
        script.id = "recaptcha-v2-script";
        script.src = `https://www.google.com/recaptcha/api.js?onload=${callbackName}&render=explicit`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      } else if (window.grecaptcha && window.grecaptcha.render) {
        renderWidget();
      }
    }

    return () => {
      isMounted = false;
      // Do not remove script to allow re-navigation across pages
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

