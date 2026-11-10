// src/lib/toolsData.js
// Comprehensive metadata and configurations for all 100 DietNexa nutrition tools

export const categories = [
  {
    "id": "body-measurement-bmi",
    "name": "Body Measurement & BMI Tools",
    "icon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "short": "Anthropometric assessments, BMI, body fat percentage, and lean mass calculations."
  },
  {
    "id": "calories-energy",
    "name": "Calories & Energy Calculators",
    "icon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "short": "TDEE, daily caloric needs, deficit, surplus, and metabolic expenditure estimation."
  },
  {
    "id": "macronutrient",
    "name": "Macronutrient Calculators",
    "icon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "short": "Tailored protein, carbohydrate, healthy fat, and dietary fiber ratios."
  },
  {
    "id": "water-hydration",
    "name": "Water & Hydration Calculators",
    "icon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "short": "Hydration requirements, sweat loss metrics, and fluid-electrolyte balancing."
  },
  {
    "id": "diet-planning",
    "name": "Diet Planning Calculators",
    "icon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "short": "Meal splits, portion sizing, recipe analysis, and per-serving nutrition."
  },
  {
    "id": "weight-management",
    "name": "Weight Management Calculators",
    "icon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "short": "Weight loss/gain timelines, progress percentages, and energy deficit targets."
  },
  {
    "id": "nutrition-food",
    "name": "Nutrition & Food Calculators",
    "icon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "short": "Food calorie counts, macronutrient density, raw-to-cooked conversions, and scaling."
  },
  {
    "id": "special-nutrition",
    "name": "Special Nutrition Calculators",
    "icon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "short": "Targeted formulas for pregnancy, lactation, pediatric, athletic, and plant-based diets."
  },
  {
    "id": "clinical-nutrition",
    "name": "Clinical Nutrition Calculators",
    "icon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "short": "Evidence-based tools for diabetes, renal care, sodium restriction, and clinical screening."
  },
  {
    "id": "professional-dietitian",
    "name": "Professional Dietitian Tools",
    "icon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "short": "Gold-standard clinical equations (Mifflin, Harris-Benedict, Devine, Adjusted Body Weight)."
  }
];

export const toolsData = [
  {
    "id": 1,
    "name": "BMI Calculator",
    "slug": "bmi-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Weight / Height²",
    "shortDesc": "Calculate your Body Mass Index (BMI) to understand your weight status.",
    "seoTitle": "BMI Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free BMI Calculator (Weight / Height²). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Weight / Height²",
    "formulaExplanation": "The BMI Calculator is powered by the Weight / Height² protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of bmi calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 20,
        "max": 300,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 50,
        "max": 250,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the BMI Calculator measure?",
        "a": "The BMI Calculator calculates your calculate your body mass index (bmi) to understand your weight status.. It applies validated clinical formulas (Weight / Height²) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this BMI Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the BMI Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "ideal-body-weight-calculator",
      "healthy-weight-range-calculator",
      "body-fat-percentage-calculator"
    ]
  },
  {
    "id": 2,
    "name": "Ideal Body Weight",
    "slug": "ideal-body-weight-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Devine IBW Formula",
    "shortDesc": "Find your ideal body weight based on your height and clinical standards.",
    "seoTitle": "Ideal Body Weight — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Ideal Body Weight (Devine IBW Formula). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Devine IBW Formula",
    "formulaExplanation": "The Ideal Body Weight is powered by the Devine IBW Formula protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of ideal body weight is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Ideal Body Weight measure?",
        "a": "The Ideal Body Weight calculates your find your ideal body weight based on your height and clinical standards.. It applies validated clinical formulas (Devine IBW Formula) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Ideal Body Weight?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Ideal Body Weight?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "healthy-weight-range-calculator",
      "body-fat-percentage-calculator"
    ]
  },
  {
    "id": 3,
    "name": "Healthy Weight Range",
    "slug": "healthy-weight-range-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "BMI 18.5 - 24.9 Range",
    "shortDesc": "Discover the healthy weight span for your height based on WHO guidelines.",
    "seoTitle": "Healthy Weight Range — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Healthy Weight Range (BMI 18.5 - 24.9 Range). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "BMI 18.5 - 24.9 Range",
    "formulaExplanation": "The Healthy Weight Range is powered by the BMI 18.5 - 24.9 Range protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of healthy weight range is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 20,
        "max": 300,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 50,
        "max": 250,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Healthy Weight Range measure?",
        "a": "The Healthy Weight Range calculates your discover the healthy weight span for your height based on who guidelines.. It applies validated clinical formulas (BMI 18.5 - 24.9 Range) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Healthy Weight Range?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Healthy Weight Range?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "ideal-body-weight-calculator",
      "body-fat-percentage-calculator"
    ]
  },
  {
    "id": 4,
    "name": "Body Fat Percentage",
    "slug": "body-fat-percentage-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Deurenberg BMI formula",
    "shortDesc": "Estimate total body fat percentage using age, gender, and anthropometric data.",
    "seoTitle": "Body Fat Percentage — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Body Fat Percentage (Deurenberg BMI formula). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Deurenberg BMI formula",
    "formulaExplanation": "The Body Fat Percentage is powered by the Deurenberg BMI formula protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of body fat percentage is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 72,
        "min": 25,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 172,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 30,
        "min": 10,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Body Fat Percentage measure?",
        "a": "The Body Fat Percentage calculates your estimate total body fat percentage using age, gender, and anthropometric data.. It applies validated clinical formulas (Deurenberg BMI formula) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Body Fat Percentage?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Body Fat Percentage?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "ideal-body-weight-calculator",
      "healthy-weight-range-calculator"
    ]
  },
  {
    "id": 5,
    "name": "Lean Body Mass",
    "slug": "lean-body-mass-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Boer formula",
    "shortDesc": "Calculate your fat-free body mass essential for metabolic efficiency.",
    "seoTitle": "Lean Body Mass — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Lean Body Mass (Boer formula). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Boer formula",
    "formulaExplanation": "The Lean Body Mass is powered by the Boer formula protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of lean body mass is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 72,
        "min": 25,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 172,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Lean Body Mass measure?",
        "a": "The Lean Body Mass calculates your calculate your fat-free body mass essential for metabolic efficiency.. It applies validated clinical formulas (Boer formula) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Lean Body Mass?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Lean Body Mass?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "ideal-body-weight-calculator",
      "healthy-weight-range-calculator"
    ]
  },
  {
    "id": 6,
    "name": "Fat Mass Calculator",
    "slug": "fat-mass-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Weight × Body Fat %",
    "shortDesc": "Determine the exact kilograms of fat tissue currently on your body.",
    "seoTitle": "Fat Mass Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Fat Mass Calculator (Weight × Body Fat %). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Weight × Body Fat %",
    "formulaExplanation": "The Fat Mass Calculator is powered by the Weight × Body Fat % protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of fat mass calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 75,
        "min": 25,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "bodyFat",
        "label": "Body Fat Percentage",
        "type": "number",
        "unit": "%",
        "defaultValue": 22,
        "min": 3,
        "max": 60,
        "step": 0.5
      }
    ],
    "faqs": [
      {
        "q": "What does the Fat Mass Calculator measure?",
        "a": "The Fat Mass Calculator calculates your determine the exact kilograms of fat tissue currently on your body.. It applies validated clinical formulas (Weight × Body Fat %) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Fat Mass Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Fat Mass Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "ideal-body-weight-calculator",
      "healthy-weight-range-calculator"
    ]
  },
  {
    "id": 7,
    "name": "Waist-to-Height Ratio",
    "slug": "waist-to-height-ratio-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Waist / Height",
    "shortDesc": "Assess central visceral fat and cardiovascular risk with waist-to-height ratio.",
    "seoTitle": "Waist-to-Height Ratio — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Waist-to-Height Ratio (Waist / Height). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Waist / Height",
    "formulaExplanation": "The Waist-to-Height Ratio is powered by the Waist / Height protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of waist-to-height ratio is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "waist",
        "label": "Waist Circumference",
        "type": "number",
        "unit": "cm",
        "defaultValue": 82,
        "min": 40,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 172,
        "min": 100,
        "max": 250,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Waist-to-Height Ratio measure?",
        "a": "The Waist-to-Height Ratio calculates your assess central visceral fat and cardiovascular risk with waist-to-height ratio.. It applies validated clinical formulas (Waist / Height) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Waist-to-Height Ratio?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Waist-to-Height Ratio?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "ideal-body-weight-calculator",
      "healthy-weight-range-calculator"
    ]
  },
  {
    "id": 8,
    "name": "Waist-to-Hip Ratio",
    "slug": "waist-to-hip-ratio-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Waist / Hip",
    "shortDesc": "Evaluate fat distribution pattern and cardiometabolic syndrome risk.",
    "seoTitle": "Waist-to-Hip Ratio — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Waist-to-Hip Ratio (Waist / Hip). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Waist / Hip",
    "formulaExplanation": "The Waist-to-Hip Ratio is powered by the Waist / Hip protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of waist-to-hip ratio is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "waist",
        "label": "Waist Circumference",
        "type": "number",
        "unit": "cm",
        "defaultValue": 82,
        "min": 40,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "hip",
        "label": "Hip Circumference",
        "type": "number",
        "unit": "cm",
        "defaultValue": 96,
        "min": 40,
        "max": 220,
        "step": 0.5
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Waist-to-Hip Ratio measure?",
        "a": "The Waist-to-Hip Ratio calculates your evaluate fat distribution pattern and cardiometabolic syndrome risk.. It applies validated clinical formulas (Waist / Hip) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Waist-to-Hip Ratio?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Waist-to-Hip Ratio?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "ideal-body-weight-calculator",
      "healthy-weight-range-calculator"
    ]
  },
  {
    "id": 9,
    "name": "BMR Calculator",
    "slug": "bmr-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Mifflin-St Jeor formula",
    "shortDesc": "Calculate your Basal Metabolic Rate—calories burned at complete rest.",
    "seoTitle": "BMR Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free BMR Calculator (Mifflin-St Jeor formula). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Mifflin-St Jeor formula",
    "formulaExplanation": "The BMR Calculator is powered by the Mifflin-St Jeor formula protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of bmr calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 28,
        "min": 10,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the BMR Calculator measure?",
        "a": "The BMR Calculator calculates your calculate your basal metabolic rate—calories burned at complete rest.. It applies validated clinical formulas (Mifflin-St Jeor formula) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this BMR Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the BMR Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "ideal-body-weight-calculator",
      "healthy-weight-range-calculator"
    ]
  },
  {
    "id": 10,
    "name": "Body Surface Area",
    "slug": "body-surface-area-calculator",
    "category": "body-measurement-bmi",
    "categoryName": "Body Measurement & BMI Tools",
    "categoryIcon": "Scale",
    "themeColor": "#10793f",
    "themeBg": "#edf8f1",
    "calculation": "Mosteller formula",
    "shortDesc": "Compute clinical Body Surface Area (BSA) in m² for metabolic sizing.",
    "seoTitle": "Body Surface Area — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Body Surface Area (Mosteller formula). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Mosteller formula",
    "formulaExplanation": "The Body Surface Area is powered by the Mosteller formula protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of body surface area is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 5,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 40,
        "max": 250,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Body Surface Area measure?",
        "a": "The Body Surface Area calculates your compute clinical body surface area (bsa) in m² for metabolic sizing.. It applies validated clinical formulas (Mosteller formula) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Body Surface Area?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Body Surface Area?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "bmi-calculator",
      "ideal-body-weight-calculator",
      "healthy-weight-range-calculator"
    ]
  },
  {
    "id": 11,
    "name": "Daily Calorie Calculator",
    "slug": "daily-calorie-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "TDEE from BMR & Activity",
    "shortDesc": "Estimate total daily calories needed to sustain your daily routine.",
    "seoTitle": "Daily Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Daily Calorie Calculator (TDEE from BMR & Activity). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "TDEE from BMR & Activity",
    "formulaExplanation": "The Daily Calorie Calculator is powered by the TDEE from BMR & Activity protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of daily calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 28,
        "min": 12,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      },
      {
        "id": "activity",
        "label": "Activity Level",
        "type": "select",
        "options": [
          {
            "label": "Sedentary (desk job, minimal exercise)",
            "value": "sedentary"
          },
          {
            "label": "Light (exercise 1-3 days/week)",
            "value": "light"
          },
          {
            "label": "Moderate (exercise 3-5 days/week)",
            "value": "moderate"
          },
          {
            "label": "Active (hard exercise 6-7 days/week)",
            "value": "active"
          },
          {
            "label": "Very Active (physical job & training)",
            "value": "veryActive"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the Daily Calorie Calculator measure?",
        "a": "The Daily Calorie Calculator calculates your estimate total daily calories needed to sustain your daily routine.. It applies validated clinical formulas (TDEE from BMR & Activity) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Daily Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Daily Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "tdee-calculator",
      "maintenance-calories-calculator",
      "weight-loss-calories-calculator"
    ]
  },
  {
    "id": 12,
    "name": "TDEE Calculator",
    "slug": "tdee-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "Total Daily Energy Expenditure",
    "shortDesc": "Discover your exact daily energy burn across all activities.",
    "seoTitle": "TDEE Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free TDEE Calculator (Total Daily Energy Expenditure). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Total Daily Energy Expenditure",
    "formulaExplanation": "The TDEE Calculator is powered by the Total Daily Energy Expenditure protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of tdee calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 28,
        "min": 12,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      },
      {
        "id": "activity",
        "label": "Activity Level",
        "type": "select",
        "options": [
          {
            "label": "Sedentary (desk job, minimal exercise)",
            "value": "sedentary"
          },
          {
            "label": "Light (exercise 1-3 days/week)",
            "value": "light"
          },
          {
            "label": "Moderate (exercise 3-5 days/week)",
            "value": "moderate"
          },
          {
            "label": "Active (hard exercise 6-7 days/week)",
            "value": "active"
          },
          {
            "label": "Very Active (physical job & training)",
            "value": "veryActive"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the TDEE Calculator measure?",
        "a": "The TDEE Calculator calculates your discover your exact daily energy burn across all activities.. It applies validated clinical formulas (Total Daily Energy Expenditure) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this TDEE Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the TDEE Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "maintenance-calories-calculator",
      "weight-loss-calories-calculator"
    ]
  },
  {
    "id": 13,
    "name": "Maintenance Calories",
    "slug": "maintenance-calories-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "Zero Energy Balance",
    "shortDesc": "Find the exact caloric intake required to maintain your current body weight.",
    "seoTitle": "Maintenance Calories — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Maintenance Calories (Zero Energy Balance). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Zero Energy Balance",
    "formulaExplanation": "The Maintenance Calories is powered by the Zero Energy Balance protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of maintenance calories is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 28,
        "min": 12,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      },
      {
        "id": "activity",
        "label": "Activity Level",
        "type": "select",
        "options": [
          {
            "label": "Sedentary (desk job, minimal exercise)",
            "value": "sedentary"
          },
          {
            "label": "Light (exercise 1-3 days/week)",
            "value": "light"
          },
          {
            "label": "Moderate (exercise 3-5 days/week)",
            "value": "moderate"
          },
          {
            "label": "Active (hard exercise 6-7 days/week)",
            "value": "active"
          },
          {
            "label": "Very Active (physical job & training)",
            "value": "veryActive"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the Maintenance Calories measure?",
        "a": "The Maintenance Calories calculates your find the exact caloric intake required to maintain your current body weight.. It applies validated clinical formulas (Zero Energy Balance) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Maintenance Calories?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Maintenance Calories?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "tdee-calculator",
      "weight-loss-calories-calculator"
    ]
  },
  {
    "id": 14,
    "name": "Weight Loss Calories",
    "slug": "weight-loss-calories-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "TDEE - Calorie Deficit",
    "shortDesc": "Calculate daily calorie targets for sustainable fat reduction.",
    "seoTitle": "Weight Loss Calories — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Weight Loss Calories (TDEE - Calorie Deficit). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "TDEE - Calorie Deficit",
    "formulaExplanation": "The Weight Loss Calories is powered by the TDEE - Calorie Deficit protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of weight loss calories is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 75,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 30,
        "min": 15,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      },
      {
        "id": "activity",
        "label": "Activity Level",
        "type": "select",
        "options": [
          {
            "label": "Sedentary",
            "value": "sedentary"
          },
          {
            "label": "Light Active",
            "value": "light"
          },
          {
            "label": "Moderately Active",
            "value": "moderate"
          },
          {
            "label": "Very Active",
            "value": "active"
          }
        ],
        "defaultValue": "moderate"
      },
      {
        "id": "deficitPace",
        "label": "Target Deficit Pace",
        "type": "select",
        "options": [
          {
            "label": "Mild (250 kcal/day — 0.25 kg/wk)",
            "value": "250"
          },
          {
            "label": "Standard (500 kcal/day — 0.5 kg/wk)",
            "value": "500"
          },
          {
            "label": "Aggressive (750 kcal/day — 0.75 kg/wk)",
            "value": "750"
          }
        ],
        "defaultValue": "500"
      }
    ],
    "faqs": [
      {
        "q": "What does the Weight Loss Calories measure?",
        "a": "The Weight Loss Calories calculates your calculate daily calorie targets for sustainable fat reduction.. It applies validated clinical formulas (TDEE - Calorie Deficit) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Weight Loss Calories?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Weight Loss Calories?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "tdee-calculator",
      "maintenance-calories-calculator"
    ]
  },
  {
    "id": 15,
    "name": "Weight Gain Calories",
    "slug": "weight-gain-calories-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "TDEE + Calorie Surplus",
    "shortDesc": "Set targeted caloric surplus for lean muscle hypertrophy and weight gain.",
    "seoTitle": "Weight Gain Calories — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Weight Gain Calories (TDEE + Calorie Surplus). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "TDEE + Calorie Surplus",
    "formulaExplanation": "The Weight Gain Calories is powered by the TDEE + Calorie Surplus protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of weight gain calories is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Current Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 62,
        "min": 30,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 175,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 24,
        "min": 15,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      },
      {
        "id": "activity",
        "label": "Activity Level",
        "type": "select",
        "options": [
          {
            "label": "Light",
            "value": "light"
          },
          {
            "label": "Moderate",
            "value": "moderate"
          },
          {
            "label": "Very Active",
            "value": "active"
          }
        ],
        "defaultValue": "moderate"
      },
      {
        "id": "surplusPace",
        "label": "Surplus Target",
        "type": "select",
        "options": [
          {
            "label": "Lean Hypertrophy (+300 kcal/day)",
            "value": "300"
          },
          {
            "label": "Standard Bulk (+500 kcal/day)",
            "value": "500"
          }
        ],
        "defaultValue": "350"
      }
    ],
    "faqs": [
      {
        "q": "What does the Weight Gain Calories measure?",
        "a": "The Weight Gain Calories calculates your set targeted caloric surplus for lean muscle hypertrophy and weight gain.. It applies validated clinical formulas (TDEE + Calorie Surplus) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Weight Gain Calories?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Weight Gain Calories?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "tdee-calculator",
      "maintenance-calories-calculator"
    ]
  },
  {
    "id": 16,
    "name": "Calorie Deficit Calculator",
    "slug": "calorie-deficit-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "Deficit per day calculation",
    "shortDesc": "Analyze daily calorie deficit required for your target weekly weight loss.",
    "seoTitle": "Calorie Deficit Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Calorie Deficit Calculator (Deficit per day calculation). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Deficit per day calculation",
    "formulaExplanation": "The Calorie Deficit Calculator is powered by the Deficit per day calculation protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of calorie deficit calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyIntake",
        "label": "Estimated Maintenance TDEE",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2400,
        "min": 1200,
        "max": 5000,
        "step": 50
      },
      {
        "id": "deficit",
        "label": "Desired Calorie Deficit",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 500,
        "min": 100,
        "max": 1200,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Calorie Deficit Calculator measure?",
        "a": "The Calorie Deficit Calculator calculates your analyze daily calorie deficit required for your target weekly weight loss.. It applies validated clinical formulas (Deficit per day calculation) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Calorie Deficit Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Calorie Deficit Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "tdee-calculator",
      "maintenance-calories-calculator"
    ]
  },
  {
    "id": 17,
    "name": "Calorie Surplus Calculator",
    "slug": "calorie-surplus-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "Surplus per day calculation",
    "shortDesc": "Calculate clean daily calorie surplus to build muscle without excessive fat.",
    "seoTitle": "Calorie Surplus Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Calorie Surplus Calculator (Surplus per day calculation). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Surplus per day calculation",
    "formulaExplanation": "The Calorie Surplus Calculator is powered by the Surplus per day calculation protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of calorie surplus calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "maintenance",
        "label": "Current Maintenance Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2200,
        "min": 1200,
        "max": 5000,
        "step": 50
      },
      {
        "id": "surplus",
        "label": "Target Daily Surplus",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 400,
        "min": 100,
        "max": 1000,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Calorie Surplus Calculator measure?",
        "a": "The Calorie Surplus Calculator calculates your calculate clean daily calorie surplus to build muscle without excessive fat.. It applies validated clinical formulas (Surplus per day calculation) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Calorie Surplus Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Calorie Surplus Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "tdee-calculator",
      "maintenance-calories-calculator"
    ]
  },
  {
    "id": 18,
    "name": "Resting Energy Calculator",
    "slug": "resting-energy-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "Resting Energy Expenditure",
    "shortDesc": "Estimate 24-hour resting caloric expenditure and hourly base burn rate.",
    "seoTitle": "Resting Energy Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Resting Energy Calculator (Resting Energy Expenditure). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Resting Energy Expenditure",
    "formulaExplanation": "The Resting Energy Calculator is powered by the Resting Energy Expenditure protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of resting energy calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 28,
        "min": 10,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Resting Energy Calculator measure?",
        "a": "The Resting Energy Calculator calculates your estimate 24-hour resting caloric expenditure and hourly base burn rate.. It applies validated clinical formulas (Resting Energy Expenditure) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Resting Energy Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Resting Energy Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "tdee-calculator",
      "maintenance-calories-calculator"
    ]
  },
  {
    "id": 19,
    "name": "Activity Calorie Calculator",
    "slug": "activity-calorie-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "MET × Weight × Time",
    "shortDesc": "Calculate calories burned during various occupational and lifestyle activities.",
    "seoTitle": "Activity Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Activity Calorie Calculator (MET × Weight × Time). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "MET × Weight × Time",
    "formulaExplanation": "The Activity Calorie Calculator is powered by the MET × Weight × Time protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of activity calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "activityType",
        "label": "Activity / Sport",
        "type": "select",
        "options": [
          {
            "label": "Brisk Walking (5 km/h)",
            "value": "3.5"
          },
          {
            "label": "Jogging / Running (8 km/h)",
            "value": "8.3"
          },
          {
            "label": "Cycling (Moderate)",
            "value": "6.8"
          },
          {
            "label": "Weight Training / Gym",
            "value": "5.0"
          },
          {
            "label": "Swimming (Freestyle)",
            "value": "7.0"
          },
          {
            "label": "Yoga / Pilates",
            "value": "2.8"
          },
          {
            "label": "HIIT Session",
            "value": "9.0"
          }
        ],
        "defaultValue": "6.8"
      },
      {
        "id": "duration",
        "label": "Duration",
        "type": "number",
        "unit": "minutes",
        "defaultValue": 45,
        "min": 5,
        "max": 300,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Activity Calorie Calculator measure?",
        "a": "The Activity Calorie Calculator calculates your calculate calories burned during various occupational and lifestyle activities.. It applies validated clinical formulas (MET × Weight × Time) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Activity Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Activity Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "tdee-calculator",
      "maintenance-calories-calculator"
    ]
  },
  {
    "id": 20,
    "name": "Exercise Calorie Calculator",
    "slug": "exercise-calorie-calculator",
    "category": "calories-energy",
    "categoryName": "Calories & Energy Calculators",
    "categoryIcon": "Flame",
    "themeColor": "#b45309",
    "themeBg": "#fef3c7",
    "calculation": "Workout MET energy expenditure",
    "shortDesc": "Estimate calories torched during cardio, weight training, or sports sessions.",
    "seoTitle": "Exercise Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Exercise Calorie Calculator (Workout MET energy expenditure). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Workout MET energy expenditure",
    "formulaExplanation": "The Exercise Calorie Calculator is powered by the Workout MET energy expenditure protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of exercise calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "activityType",
        "label": "Activity / Sport",
        "type": "select",
        "options": [
          {
            "label": "Brisk Walking (5 km/h)",
            "value": "3.5"
          },
          {
            "label": "Jogging / Running (8 km/h)",
            "value": "8.3"
          },
          {
            "label": "Cycling (Moderate)",
            "value": "6.8"
          },
          {
            "label": "Weight Training / Gym",
            "value": "5.0"
          },
          {
            "label": "Swimming (Freestyle)",
            "value": "7.0"
          },
          {
            "label": "Yoga / Pilates",
            "value": "2.8"
          },
          {
            "label": "HIIT Session",
            "value": "9.0"
          }
        ],
        "defaultValue": "6.8"
      },
      {
        "id": "duration",
        "label": "Duration",
        "type": "number",
        "unit": "minutes",
        "defaultValue": 45,
        "min": 5,
        "max": 300,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Exercise Calorie Calculator measure?",
        "a": "The Exercise Calorie Calculator calculates your estimate calories torched during cardio, weight training, or sports sessions.. It applies validated clinical formulas (Workout MET energy expenditure) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Exercise Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Exercise Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-calorie-calculator",
      "tdee-calculator",
      "maintenance-calories-calculator"
    ]
  },
  {
    "id": 21,
    "name": "Protein Calculator",
    "slug": "protein-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "Daily protein requirement",
    "shortDesc": "Calculate optimal daily protein intake based on activity and body composition.",
    "seoTitle": "Protein Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Protein Calculator (Daily protein requirement). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Daily protein requirement",
    "formulaExplanation": "The Protein Calculator is powered by the Daily protein requirement protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of protein calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 68,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "goal",
        "label": "Training Goal / Lifestyle",
        "type": "select",
        "options": [
          {
            "label": "Sedentary / Baseline Health (0.8 - 1.0 g/kg)",
            "value": "baseline"
          },
          {
            "label": "Fitness & Endurance (1.2 - 1.4 g/kg)",
            "value": "moderate"
          },
          {
            "label": "Fat Loss & Muscle Sparing (1.6 - 1.8 g/kg)",
            "value": "fatloss"
          },
          {
            "label": "Hypertrophy & Strength (2.0 - 2.2 g/kg)",
            "value": "muscle"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the Protein Calculator measure?",
        "a": "The Protein Calculator calculates your calculate optimal daily protein intake based on activity and body composition.. It applies validated clinical formulas (Daily protein requirement) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Protein Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Protein Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "carbohydrate-calculator",
      "fat-calculator",
      "fiber-calculator"
    ]
  },
  {
    "id": 22,
    "name": "Carbohydrate Calculator",
    "slug": "carbohydrate-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "45-65% daily energy",
    "shortDesc": "Determine daily carbohydrate requirements in grams and calories.",
    "seoTitle": "Carbohydrate Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Carbohydrate Calculator (45-65% daily energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "45-65% daily energy",
    "formulaExplanation": "The Carbohydrate Calculator is powered by the 45-65% daily energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of carbohydrate calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Carbohydrate Calculator measure?",
        "a": "The Carbohydrate Calculator calculates your determine daily carbohydrate requirements in grams and calories.. It applies validated clinical formulas (45-65% daily energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Carbohydrate Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Carbohydrate Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "fat-calculator",
      "fiber-calculator"
    ]
  },
  {
    "id": 23,
    "name": "Fat Calculator",
    "slug": "fat-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "20-35% daily energy",
    "shortDesc": "Compute healthy dietary fat requirements for hormone balance and energy.",
    "seoTitle": "Fat Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Fat Calculator (20-35% daily energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "20-35% daily energy",
    "formulaExplanation": "The Fat Calculator is powered by the 20-35% daily energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of fat calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Fat Calculator measure?",
        "a": "The Fat Calculator calculates your compute healthy dietary fat requirements for hormone balance and energy.. It applies validated clinical formulas (20-35% daily energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Fat Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Fat Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "carbohydrate-calculator",
      "fiber-calculator"
    ]
  },
  {
    "id": 24,
    "name": "Fiber Calculator",
    "slug": "fiber-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "14g per 1000 kcal",
    "shortDesc": "Determine dietary fiber intake for optimal gut microbiome and blood sugar stability.",
    "seoTitle": "Fiber Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Fiber Calculator (14g per 1000 kcal). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "14g per 1000 kcal",
    "formulaExplanation": "The Fiber Calculator is powered by the 14g per 1000 kcal protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of fiber calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Fiber Calculator measure?",
        "a": "The Fiber Calculator calculates your determine dietary fiber intake for optimal gut microbiome and blood sugar stability.. It applies validated clinical formulas (14g per 1000 kcal) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Fiber Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Fiber Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "carbohydrate-calculator",
      "fat-calculator"
    ]
  },
  {
    "id": 25,
    "name": "Sugar Intake Calculator",
    "slug": "sugar-intake-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "WHO <5-10% of energy",
    "shortDesc": "Calculate maximum recommended daily added sugar limits according to WHO.",
    "seoTitle": "Sugar Intake Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Sugar Intake Calculator (WHO <5-10% of energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "WHO <5-10% of energy",
    "formulaExplanation": "The Sugar Intake Calculator is powered by the WHO <5-10% of energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of sugar intake calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Sugar Intake Calculator measure?",
        "a": "The Sugar Intake Calculator calculates your calculate maximum recommended daily added sugar limits according to who.. It applies validated clinical formulas (WHO <5-10% of energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Sugar Intake Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Sugar Intake Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "carbohydrate-calculator",
      "fat-calculator"
    ]
  },
  {
    "id": 26,
    "name": "Saturated Fat Calculator",
    "slug": "saturated-fat-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "AHA <5-6% of energy",
    "shortDesc": "Establish heart-safe saturated fat limits for optimal lipid profile.",
    "seoTitle": "Saturated Fat Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Saturated Fat Calculator (AHA <5-6% of energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "AHA <5-6% of energy",
    "formulaExplanation": "The Saturated Fat Calculator is powered by the AHA <5-6% of energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of saturated fat calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Saturated Fat Calculator measure?",
        "a": "The Saturated Fat Calculator calculates your establish heart-safe saturated fat limits for optimal lipid profile.. It applies validated clinical formulas (AHA <5-6% of energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Saturated Fat Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Saturated Fat Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "carbohydrate-calculator",
      "fat-calculator"
    ]
  },
  {
    "id": 27,
    "name": "Unsaturated Fat Calculator",
    "slug": "unsaturated-fat-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "Heart-healthy lipid ratio",
    "shortDesc": "Calculate optimal monounsaturated and polyunsaturated fat daily goals.",
    "seoTitle": "Unsaturated Fat Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Unsaturated Fat Calculator (Heart-healthy lipid ratio). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Heart-healthy lipid ratio",
    "formulaExplanation": "The Unsaturated Fat Calculator is powered by the Heart-healthy lipid ratio protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of unsaturated fat calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Unsaturated Fat Calculator measure?",
        "a": "The Unsaturated Fat Calculator calculates your calculate optimal monounsaturated and polyunsaturated fat daily goals.. It applies validated clinical formulas (Heart-healthy lipid ratio) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Unsaturated Fat Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Unsaturated Fat Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "carbohydrate-calculator",
      "fat-calculator"
    ]
  },
  {
    "id": 28,
    "name": "Omega-3 Calculator",
    "slug": "omega-3-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "EPA + DHA + ALA targets",
    "shortDesc": "Estimate daily Omega-3 fatty acid requirements for cardiovascular and brain health.",
    "seoTitle": "Omega-3 Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Omega-3 Calculator (EPA + DHA + ALA targets). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "EPA + DHA + ALA targets",
    "formulaExplanation": "The Omega-3 Calculator is powered by the EPA + DHA + ALA targets protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of omega-3 calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Omega-3 Calculator measure?",
        "a": "The Omega-3 Calculator calculates your estimate daily omega-3 fatty acid requirements for cardiovascular and brain health.. It applies validated clinical formulas (EPA + DHA + ALA targets) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Omega-3 Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Omega-3 Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "carbohydrate-calculator",
      "fat-calculator"
    ]
  },
  {
    "id": 29,
    "name": "Omega-6 Calculator",
    "slug": "omega-6-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "5-10% daily energy",
    "shortDesc": "Calculate healthy Omega-6 intake while maintaining a balanced Omega 3:6 ratio.",
    "seoTitle": "Omega-6 Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Omega-6 Calculator (5-10% daily energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "5-10% daily energy",
    "formulaExplanation": "The Omega-6 Calculator is powered by the 5-10% daily energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of omega-6 calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Omega-6 Calculator measure?",
        "a": "The Omega-6 Calculator calculates your calculate healthy omega-6 intake while maintaining a balanced omega 3:6 ratio.. It applies validated clinical formulas (5-10% daily energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Omega-6 Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Omega-6 Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "carbohydrate-calculator",
      "fat-calculator"
    ]
  },
  {
    "id": 30,
    "name": "Macro Split Calculator",
    "slug": "macro-split-calculator",
    "category": "macronutrient",
    "categoryName": "Macronutrient Calculators",
    "categoryIcon": "Beef",
    "themeColor": "#7c3aed",
    "themeBg": "#f5f3ff",
    "calculation": "Protein / Carbs / Fat %",
    "shortDesc": "Customize and calculate exact grams for 40/30/30, keto, or athletic macro splits.",
    "seoTitle": "Macro Split Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Macro Split Calculator (Protein / Carbs / Fat %). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Protein / Carbs / Fat %",
    "formulaExplanation": "The Macro Split Calculator is powered by the Protein / Carbs / Fat % protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of macro split calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "carbPct",
        "label": "Carb Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 50,
        "min": 5,
        "max": 75,
        "step": 5
      },
      {
        "id": "proteinPct",
        "label": "Protein Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      },
      {
        "id": "fatPct",
        "label": "Fat Target %",
        "type": "number",
        "unit": "%",
        "defaultValue": 25,
        "min": 10,
        "max": 50,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Macro Split Calculator measure?",
        "a": "The Macro Split Calculator calculates your customize and calculate exact grams for 40/30/30, keto, or athletic macro splits.. It applies validated clinical formulas (Protein / Carbs / Fat %) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Macro Split Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Macro Split Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "protein-calculator",
      "carbohydrate-calculator",
      "fat-calculator"
    ]
  },
  {
    "id": 31,
    "name": "Daily Water Calculator",
    "slug": "daily-water-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "35ml/kg + activity",
    "shortDesc": "Calculate recommended daily water intake based on body weight and lifestyle.",
    "seoTitle": "Daily Water Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Daily Water Calculator (35ml/kg + activity). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "35ml/kg + activity",
    "formulaExplanation": "The Daily Water Calculator is powered by the 35ml/kg + activity protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of daily water calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 20,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "climate",
        "label": "Climate / Ambient Temp",
        "type": "select",
        "options": [
          {
            "label": "Moderate / Air-conditioned",
            "value": "normal"
          },
          {
            "label": "Hot & Humid (+500ml)",
            "value": "hot"
          }
        ],
        "defaultValue": "normal"
      },
      {
        "id": "exerciseMins",
        "label": "Daily Exercise Time",
        "type": "number",
        "unit": "minutes",
        "defaultValue": 30,
        "min": 0,
        "max": 240,
        "step": 10
      }
    ],
    "faqs": [
      {
        "q": "What does the Daily Water Calculator measure?",
        "a": "The Daily Water Calculator calculates your calculate recommended daily water intake based on body weight and lifestyle.. It applies validated clinical formulas (35ml/kg + activity) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Daily Water Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Daily Water Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "hydration-requirement-calculator",
      "water-intake-per-kg-calculator",
      "exercise-hydration-calculator"
    ]
  },
  {
    "id": 32,
    "name": "Hydration Requirement",
    "slug": "hydration-requirement-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "Baseline + climate + sweat",
    "shortDesc": "Determine total fluid needs considering ambient temperature and sweating.",
    "seoTitle": "Hydration Requirement — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Hydration Requirement (Baseline + climate + sweat). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Baseline + climate + sweat",
    "formulaExplanation": "The Hydration Requirement is powered by the Baseline + climate + sweat protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of hydration requirement is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 20,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "climate",
        "label": "Climate / Ambient Temp",
        "type": "select",
        "options": [
          {
            "label": "Moderate / Air-conditioned",
            "value": "normal"
          },
          {
            "label": "Hot & Humid (+500ml)",
            "value": "hot"
          }
        ],
        "defaultValue": "normal"
      },
      {
        "id": "exerciseMins",
        "label": "Daily Exercise Time",
        "type": "number",
        "unit": "minutes",
        "defaultValue": 30,
        "min": 0,
        "max": 240,
        "step": 10
      }
    ],
    "faqs": [
      {
        "q": "What does the Hydration Requirement measure?",
        "a": "The Hydration Requirement calculates your determine total fluid needs considering ambient temperature and sweating.. It applies validated clinical formulas (Baseline + climate + sweat) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Hydration Requirement?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Hydration Requirement?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "water-intake-per-kg-calculator",
      "exercise-hydration-calculator"
    ]
  },
  {
    "id": 33,
    "name": "Water Intake per KG",
    "slug": "water-intake-per-kg-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "Weight-based water formula",
    "shortDesc": "Quickly assess daily water hydration target per kilogram of body weight.",
    "seoTitle": "Water Intake per KG — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Water Intake per KG (Weight-based water formula). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Weight-based water formula",
    "formulaExplanation": "The Water Intake per KG is powered by the Weight-based water formula protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of water intake per kg is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 20,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "climate",
        "label": "Climate / Ambient Temp",
        "type": "select",
        "options": [
          {
            "label": "Moderate / Air-conditioned",
            "value": "normal"
          },
          {
            "label": "Hot & Humid (+500ml)",
            "value": "hot"
          }
        ],
        "defaultValue": "normal"
      },
      {
        "id": "exerciseMins",
        "label": "Daily Exercise Time",
        "type": "number",
        "unit": "minutes",
        "defaultValue": 30,
        "min": 0,
        "max": 240,
        "step": 10
      }
    ],
    "faqs": [
      {
        "q": "What does the Water Intake per KG measure?",
        "a": "The Water Intake per KG calculates your quickly assess daily water hydration target per kilogram of body weight.. It applies validated clinical formulas (Weight-based water formula) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Water Intake per KG?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Water Intake per KG?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "hydration-requirement-calculator",
      "exercise-hydration-calculator"
    ]
  },
  {
    "id": 34,
    "name": "Exercise Hydration",
    "slug": "exercise-hydration-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "400-800ml per workout hr",
    "shortDesc": "Compute pre, intra, and post-workout fluid replacement requirements.",
    "seoTitle": "Exercise Hydration — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Exercise Hydration (400-800ml per workout hr). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "400-800ml per workout hr",
    "formulaExplanation": "The Exercise Hydration is powered by the 400-800ml per workout hr protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of exercise hydration is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Pre-Workout Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 72,
        "min": 30,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "workoutDuration",
        "label": "Session Duration",
        "type": "number",
        "unit": "minutes",
        "defaultValue": 60,
        "min": 15,
        "max": 300,
        "step": 15
      },
      {
        "id": "intensity",
        "label": "Intensity / Sweat Rate",
        "type": "select",
        "options": [
          {
            "label": "Moderate (approx 500ml/hr)",
            "value": "500"
          },
          {
            "label": "High / Heavy Sweat (approx 800ml/hr)",
            "value": "800"
          },
          {
            "label": "Extreme Endurance (approx 1000ml/hr)",
            "value": "1000"
          }
        ],
        "defaultValue": "500"
      }
    ],
    "faqs": [
      {
        "q": "What does the Exercise Hydration measure?",
        "a": "The Exercise Hydration calculates your compute pre, intra, and post-workout fluid replacement requirements.. It applies validated clinical formulas (400-800ml per workout hr) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Exercise Hydration?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Exercise Hydration?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "hydration-requirement-calculator",
      "water-intake-per-kg-calculator"
    ]
  },
  {
    "id": 35,
    "name": "Sweat Loss Calculator",
    "slug": "sweat-loss-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "Pre/post workout weight delta",
    "shortDesc": "Measure exact sweat rate per hour to customize sports rehydration drinks.",
    "seoTitle": "Sweat Loss Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Sweat Loss Calculator (Pre/post workout weight delta). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Pre/post workout weight delta",
    "formulaExplanation": "The Sweat Loss Calculator is powered by the Pre/post workout weight delta protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of sweat loss calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "preWeight",
        "label": "Weight Before Exercise",
        "type": "number",
        "unit": "kg",
        "defaultValue": 72.5,
        "min": 30,
        "max": 200,
        "step": 0.1
      },
      {
        "id": "postWeight",
        "label": "Weight After Exercise",
        "type": "number",
        "unit": "kg",
        "defaultValue": 71.8,
        "min": 30,
        "max": 200,
        "step": 0.1
      },
      {
        "id": "fluidDrank",
        "label": "Fluid Consumed During",
        "type": "number",
        "unit": "ml",
        "defaultValue": 500,
        "min": 0,
        "max": 3000,
        "step": 50
      },
      {
        "id": "duration",
        "label": "Workout Duration",
        "type": "number",
        "unit": "minutes",
        "defaultValue": 60,
        "min": 15,
        "max": 240,
        "step": 15
      }
    ],
    "faqs": [
      {
        "q": "What does the Sweat Loss Calculator measure?",
        "a": "The Sweat Loss Calculator calculates your measure exact sweat rate per hour to customize sports rehydration drinks.. It applies validated clinical formulas (Pre/post workout weight delta) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Sweat Loss Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Sweat Loss Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "hydration-requirement-calculator",
      "water-intake-per-kg-calculator"
    ]
  },
  {
    "id": 36,
    "name": "Dehydration Percentage",
    "slug": "dehydration-percentage-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "Fluid loss % of body weight",
    "shortDesc": "Evaluate acute fluid deficit percentage and athletic performance impairment.",
    "seoTitle": "Dehydration Percentage — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Dehydration Percentage (Fluid loss % of body weight). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Fluid loss % of body weight",
    "formulaExplanation": "The Dehydration Percentage is powered by the Fluid loss % of body weight protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of dehydration percentage is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "preWeight",
        "label": "Weight Before Exercise",
        "type": "number",
        "unit": "kg",
        "defaultValue": 72.5,
        "min": 30,
        "max": 200,
        "step": 0.1
      },
      {
        "id": "postWeight",
        "label": "Weight After Exercise",
        "type": "number",
        "unit": "kg",
        "defaultValue": 71.8,
        "min": 30,
        "max": 200,
        "step": 0.1
      },
      {
        "id": "fluidDrank",
        "label": "Fluid Consumed During",
        "type": "number",
        "unit": "ml",
        "defaultValue": 500,
        "min": 0,
        "max": 3000,
        "step": 50
      },
      {
        "id": "duration",
        "label": "Workout Duration",
        "type": "number",
        "unit": "minutes",
        "defaultValue": 60,
        "min": 15,
        "max": 240,
        "step": 15
      }
    ],
    "faqs": [
      {
        "q": "What does the Dehydration Percentage measure?",
        "a": "The Dehydration Percentage calculates your evaluate acute fluid deficit percentage and athletic performance impairment.. It applies validated clinical formulas (Fluid loss % of body weight) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Dehydration Percentage?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Dehydration Percentage?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "hydration-requirement-calculator",
      "water-intake-per-kg-calculator"
    ]
  },
  {
    "id": 37,
    "name": "Electrolyte Requirement",
    "slug": "electrolyte-requirement-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "Na, K, Mg estimates",
    "shortDesc": "Determine essential daily electrolyte balance to prevent muscle cramping.",
    "seoTitle": "Electrolyte Requirement — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Electrolyte Requirement (Na, K, Mg estimates). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Na, K, Mg estimates",
    "formulaExplanation": "The Electrolyte Requirement is powered by the Na, K, Mg estimates protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of electrolyte requirement is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Daily Energy Intake",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2200,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "sweatLevel",
        "label": "Daily Sweating / Activity",
        "type": "select",
        "options": [
          {
            "label": "Normal (minimal sweating)",
            "value": "normal"
          },
          {
            "label": "Moderate (1 hr workout)",
            "value": "moderate"
          },
          {
            "label": "Heavy (athletics / outdoor heat)",
            "value": "heavy"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the Electrolyte Requirement measure?",
        "a": "The Electrolyte Requirement calculates your determine essential daily electrolyte balance to prevent muscle cramping.. It applies validated clinical formulas (Na, K, Mg estimates) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Electrolyte Requirement?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Electrolyte Requirement?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "hydration-requirement-calculator",
      "water-intake-per-kg-calculator"
    ]
  },
  {
    "id": 38,
    "name": "Sodium Intake Calculator",
    "slug": "sodium-intake-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "Daily sodium threshold",
    "shortDesc": "Check dietary sodium intake against clinical hypertension safety limits.",
    "seoTitle": "Sodium Intake Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Sodium Intake Calculator (Daily sodium threshold). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Daily sodium threshold",
    "formulaExplanation": "The Sodium Intake Calculator is powered by the Daily sodium threshold protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of sodium intake calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Daily Energy Intake",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2200,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "sweatLevel",
        "label": "Daily Sweating / Activity",
        "type": "select",
        "options": [
          {
            "label": "Normal (minimal sweating)",
            "value": "normal"
          },
          {
            "label": "Moderate (1 hr workout)",
            "value": "moderate"
          },
          {
            "label": "Heavy (athletics / outdoor heat)",
            "value": "heavy"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the Sodium Intake Calculator measure?",
        "a": "The Sodium Intake Calculator calculates your check dietary sodium intake against clinical hypertension safety limits.. It applies validated clinical formulas (Daily sodium threshold) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Sodium Intake Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Sodium Intake Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "hydration-requirement-calculator",
      "water-intake-per-kg-calculator"
    ]
  },
  {
    "id": 39,
    "name": "Potassium Intake Calculator",
    "slug": "potassium-intake-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "3500-4700mg daily goal",
    "shortDesc": "Calculate daily potassium requirement for normal blood pressure regulation.",
    "seoTitle": "Potassium Intake Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Potassium Intake Calculator (3500-4700mg daily goal). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "3500-4700mg daily goal",
    "formulaExplanation": "The Potassium Intake Calculator is powered by the 3500-4700mg daily goal protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of potassium intake calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Daily Energy Intake",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2200,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "sweatLevel",
        "label": "Daily Sweating / Activity",
        "type": "select",
        "options": [
          {
            "label": "Normal (minimal sweating)",
            "value": "normal"
          },
          {
            "label": "Moderate (1 hr workout)",
            "value": "moderate"
          },
          {
            "label": "Heavy (athletics / outdoor heat)",
            "value": "heavy"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the Potassium Intake Calculator measure?",
        "a": "The Potassium Intake Calculator calculates your calculate daily potassium requirement for normal blood pressure regulation.. It applies validated clinical formulas (3500-4700mg daily goal) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Potassium Intake Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Potassium Intake Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "hydration-requirement-calculator",
      "water-intake-per-kg-calculator"
    ]
  },
  {
    "id": 40,
    "name": "Fluid Balance Calculator",
    "slug": "fluid-balance-calculator",
    "category": "water-hydration",
    "categoryName": "Water & Hydration Calculators",
    "categoryIcon": "Droplets",
    "themeColor": "#0369a1",
    "themeBg": "#e0f2fe",
    "calculation": "Fluid Intake minus Output",
    "shortDesc": "Monitor clinical fluid balance (net positive/negative status) over 24 hours.",
    "seoTitle": "Fluid Balance Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Fluid Balance Calculator (Fluid Intake minus Output). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Fluid Intake minus Output",
    "formulaExplanation": "The Fluid Balance Calculator is powered by the Fluid Intake minus Output protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of fluid balance calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "fluidIn",
        "label": "Total Fluid Intake (Oral + Food)",
        "type": "number",
        "unit": "ml",
        "defaultValue": 2400,
        "min": 200,
        "max": 10000,
        "step": 50
      },
      {
        "id": "urineOut",
        "label": "Urine Output",
        "type": "number",
        "unit": "ml",
        "defaultValue": 1600,
        "min": 100,
        "max": 8000,
        "step": 50
      },
      {
        "id": "insensibleLoss",
        "label": "Estimated Sweat & Respiration",
        "type": "number",
        "unit": "ml",
        "defaultValue": 700,
        "min": 300,
        "max": 2000,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Fluid Balance Calculator measure?",
        "a": "The Fluid Balance Calculator calculates your monitor clinical fluid balance (net positive/negative status) over 24 hours.. It applies validated clinical formulas (Fluid Intake minus Output) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Fluid Balance Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Fluid Balance Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "daily-water-calculator",
      "hydration-requirement-calculator",
      "water-intake-per-kg-calculator"
    ]
  },
  {
    "id": 41,
    "name": "Meal Calorie Split",
    "slug": "meal-calorie-split-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "Meal energy partitioning",
    "shortDesc": "Divide daily calories into balanced breakfast, lunch, snack, and dinner portions.",
    "seoTitle": "Meal Calorie Split — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Meal Calorie Split (Meal energy partitioning). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Meal energy partitioning",
    "formulaExplanation": "The Meal Calorie Split is powered by the Meal energy partitioning protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of meal calorie split is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2100,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "mealsCount",
        "label": "Meals Per Day",
        "type": "select",
        "options": [
          {
            "label": "3 Meals (Breakfast, Lunch, Dinner)",
            "value": "3"
          },
          {
            "label": "4 Meals (3 Meals + 1 Snack)",
            "value": "4"
          },
          {
            "label": "5 Meals (3 Meals + 2 Snacks)",
            "value": "5"
          }
        ],
        "defaultValue": "4"
      }
    ],
    "faqs": [
      {
        "q": "What does the Meal Calorie Split measure?",
        "a": "The Meal Calorie Split calculates your divide daily calories into balanced breakfast, lunch, snack, and dinner portions.. It applies validated clinical formulas (Meal energy partitioning) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Meal Calorie Split?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Meal Calorie Split?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "breakfast-calorie-calculator",
      "lunch-calorie-calculator",
      "dinner-calorie-calculator"
    ]
  },
  {
    "id": 42,
    "name": "Breakfast Calorie Calculator",
    "slug": "breakfast-calorie-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "20-25% daily energy",
    "shortDesc": "Determine the ideal morning meal energy target for sustained morning vitality.",
    "seoTitle": "Breakfast Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Breakfast Calorie Calculator (20-25% daily energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "20-25% daily energy",
    "formulaExplanation": "The Breakfast Calorie Calculator is powered by the 20-25% daily energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of breakfast calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calorie Target",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Breakfast Calorie Calculator measure?",
        "a": "The Breakfast Calorie Calculator calculates your determine the ideal morning meal energy target for sustained morning vitality.. It applies validated clinical formulas (20-25% daily energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Breakfast Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Breakfast Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "lunch-calorie-calculator",
      "dinner-calorie-calculator"
    ]
  },
  {
    "id": 43,
    "name": "Lunch Calorie Calculator",
    "slug": "lunch-calorie-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "30-35% daily energy",
    "shortDesc": "Calculate mid-day lunch energy targets to avoid afternoon energy crashes.",
    "seoTitle": "Lunch Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Lunch Calorie Calculator (30-35% daily energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "30-35% daily energy",
    "formulaExplanation": "The Lunch Calorie Calculator is powered by the 30-35% daily energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of lunch calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calorie Target",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Lunch Calorie Calculator measure?",
        "a": "The Lunch Calorie Calculator calculates your calculate mid-day lunch energy targets to avoid afternoon energy crashes.. It applies validated clinical formulas (30-35% daily energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Lunch Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Lunch Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "breakfast-calorie-calculator",
      "dinner-calorie-calculator"
    ]
  },
  {
    "id": 44,
    "name": "Dinner Calorie Calculator",
    "slug": "dinner-calorie-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "25-30% daily energy",
    "shortDesc": "Find optimal evening meal calorie distribution for restorative sleep and digestion.",
    "seoTitle": "Dinner Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Dinner Calorie Calculator (25-30% daily energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "25-30% daily energy",
    "formulaExplanation": "The Dinner Calorie Calculator is powered by the 25-30% daily energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of dinner calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calorie Target",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Dinner Calorie Calculator measure?",
        "a": "The Dinner Calorie Calculator calculates your find optimal evening meal calorie distribution for restorative sleep and digestion.. It applies validated clinical formulas (25-30% daily energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Dinner Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Dinner Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "breakfast-calorie-calculator",
      "lunch-calorie-calculator"
    ]
  },
  {
    "id": 45,
    "name": "Snack Calorie Calculator",
    "slug": "snack-calorie-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "10-15% daily energy",
    "shortDesc": "Plan healthy snack calorie allowances between main meals.",
    "seoTitle": "Snack Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Snack Calorie Calculator (10-15% daily energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "10-15% daily energy",
    "formulaExplanation": "The Snack Calorie Calculator is powered by the 10-15% daily energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of snack calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calorie Target",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2000,
        "min": 1000,
        "max": 5000,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Snack Calorie Calculator measure?",
        "a": "The Snack Calorie Calculator calculates your plan healthy snack calorie allowances between main meals.. It applies validated clinical formulas (10-15% daily energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Snack Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Snack Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "breakfast-calorie-calculator",
      "lunch-calorie-calculator"
    ]
  },
  {
    "id": 46,
    "name": "Meal Macro Split",
    "slug": "meal-macro-split-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "Macros per meal",
    "shortDesc": "Calculate grams of protein, carbs, and fats for each individual meal.",
    "seoTitle": "Meal Macro Split — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Meal Macro Split (Macros per meal). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Macros per meal",
    "formulaExplanation": "The Meal Macro Split is powered by the Macros per meal protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of meal macro split is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyCalories",
        "label": "Total Daily Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 2100,
        "min": 1000,
        "max": 5000,
        "step": 50
      },
      {
        "id": "mealsCount",
        "label": "Meals Per Day",
        "type": "select",
        "options": [
          {
            "label": "3 Meals (Breakfast, Lunch, Dinner)",
            "value": "3"
          },
          {
            "label": "4 Meals (3 Meals + 1 Snack)",
            "value": "4"
          },
          {
            "label": "5 Meals (3 Meals + 2 Snacks)",
            "value": "5"
          }
        ],
        "defaultValue": "4"
      }
    ],
    "faqs": [
      {
        "q": "What does the Meal Macro Split measure?",
        "a": "The Meal Macro Split calculates your calculate grams of protein, carbs, and fats for each individual meal.. It applies validated clinical formulas (Macros per meal) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Meal Macro Split?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Meal Macro Split?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "breakfast-calorie-calculator",
      "lunch-calorie-calculator"
    ]
  },
  {
    "id": 47,
    "name": "Portion Size Calculator",
    "slug": "portion-size-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "Portion weight from density",
    "shortDesc": "Determine exact food serving weights based on caloric density and meal target.",
    "seoTitle": "Portion Size Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Portion Size Calculator (Portion weight from density). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Portion weight from density",
    "formulaExplanation": "The Portion Size Calculator is powered by the Portion weight from density protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of portion size calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "targetCalories",
        "label": "Desired Meal Energy",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 450,
        "min": 50,
        "max": 2000,
        "step": 25
      },
      {
        "id": "calPer100g",
        "label": "Food Calorie Density (kcal per 100g)",
        "type": "number",
        "unit": "kcal/100g",
        "defaultValue": 130,
        "min": 10,
        "max": 900,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Portion Size Calculator measure?",
        "a": "The Portion Size Calculator calculates your determine exact food serving weights based on caloric density and meal target.. It applies validated clinical formulas (Portion weight from density) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Portion Size Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Portion Size Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "breakfast-calorie-calculator",
      "lunch-calorie-calculator"
    ]
  },
  {
    "id": 48,
    "name": "Food Quantity Calculator",
    "slug": "food-quantity-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "Target nutrient / food density",
    "shortDesc": "Calculate required grams of any food item to reach a desired nutrient target.",
    "seoTitle": "Food Quantity Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Food Quantity Calculator (Target nutrient / food density). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Target nutrient / food density",
    "formulaExplanation": "The Food Quantity Calculator is powered by the Target nutrient / food density protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of food quantity calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "targetCalories",
        "label": "Desired Meal Energy",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 450,
        "min": 50,
        "max": 2000,
        "step": 25
      },
      {
        "id": "calPer100g",
        "label": "Food Calorie Density (kcal per 100g)",
        "type": "number",
        "unit": "kcal/100g",
        "defaultValue": 130,
        "min": 10,
        "max": 900,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Food Quantity Calculator measure?",
        "a": "The Food Quantity Calculator calculates your calculate required grams of any food item to reach a desired nutrient target.. It applies validated clinical formulas (Target nutrient / food density) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Food Quantity Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Food Quantity Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "breakfast-calorie-calculator",
      "lunch-calorie-calculator"
    ]
  },
  {
    "id": 49,
    "name": "Recipe Calorie Calculator",
    "slug": "recipe-calorie-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "Total dish energy sum",
    "shortDesc": "Calculate total calories and macronutrients for home-cooked recipes.",
    "seoTitle": "Recipe Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Recipe Calorie Calculator (Total dish energy sum). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Total dish energy sum",
    "formulaExplanation": "The Recipe Calorie Calculator is powered by the Total dish energy sum protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of recipe calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "totalRecipeCalories",
        "label": "Total Recipe Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 1800,
        "min": 100,
        "max": 15000,
        "step": 50
      },
      {
        "id": "servings",
        "label": "Total Number of Servings",
        "type": "number",
        "unit": "servings",
        "defaultValue": 4,
        "min": 1,
        "max": 50,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Recipe Calorie Calculator measure?",
        "a": "The Recipe Calorie Calculator calculates your calculate total calories and macronutrients for home-cooked recipes.. It applies validated clinical formulas (Total dish energy sum) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Recipe Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Recipe Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "breakfast-calorie-calculator",
      "lunch-calorie-calculator"
    ]
  },
  {
    "id": 50,
    "name": "Per Serving Calculator",
    "slug": "per-serving-calculator",
    "category": "diet-planning",
    "categoryName": "Diet Planning Calculators",
    "categoryIcon": "UtensilsCrossed",
    "themeColor": "#0f766e",
    "themeBg": "#f0fdfa",
    "calculation": "Total Recipe / Servings",
    "shortDesc": "Breakdown total dish calories and macros down to a single plate serving.",
    "seoTitle": "Per Serving Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Per Serving Calculator (Total Recipe / Servings). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Total Recipe / Servings",
    "formulaExplanation": "The Per Serving Calculator is powered by the Total Recipe / Servings protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of per serving calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "totalRecipeCalories",
        "label": "Total Recipe Calories",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 1800,
        "min": 100,
        "max": 15000,
        "step": 50
      },
      {
        "id": "servings",
        "label": "Total Number of Servings",
        "type": "number",
        "unit": "servings",
        "defaultValue": 4,
        "min": 1,
        "max": 50,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Per Serving Calculator measure?",
        "a": "The Per Serving Calculator calculates your breakdown total dish calories and macros down to a single plate serving.. It applies validated clinical formulas (Total Recipe / Servings) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Per Serving Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Per Serving Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "meal-calorie-split-calculator",
      "breakfast-calorie-calculator",
      "lunch-calorie-calculator"
    ]
  },
  {
    "id": 51,
    "name": "Weight Loss Timeline",
    "slug": "weight-loss-timeline-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "7700 kcal / kg fat loss",
    "shortDesc": "Estimate exact weeks and months required to hit your target goal weight.",
    "seoTitle": "Weight Loss Timeline — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Weight Loss Timeline (7700 kcal / kg fat loss). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "7700 kcal / kg fat loss",
    "formulaExplanation": "The Weight Loss Timeline is powered by the 7700 kcal / kg fat loss protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of weight loss timeline is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "currentWeight",
        "label": "Current Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 82,
        "min": 35,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "targetWeight",
        "label": "Target Goal Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 35,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "dailyDeficit",
        "label": "Daily Calorie Deficit",
        "type": "select",
        "options": [
          {
            "label": "Mild Deficit (300 kcal/day — 0.27 kg/wk)",
            "value": "300"
          },
          {
            "label": "Optimal Deficit (500 kcal/day — 0.45 kg/wk)",
            "value": "500"
          },
          {
            "label": "Brisk Deficit (750 kcal/day — 0.68 kg/wk)",
            "value": "750"
          },
          {
            "label": "Maximum Deficit (1000 kcal/day — 0.9 kg/wk)",
            "value": "1000"
          }
        ],
        "defaultValue": "500"
      }
    ],
    "faqs": [
      {
        "q": "What does the Weight Loss Timeline measure?",
        "a": "The Weight Loss Timeline calculates your estimate exact weeks and months required to hit your target goal weight.. It applies validated clinical formulas (7700 kcal / kg fat loss) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Weight Loss Timeline?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Weight Loss Timeline?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-gain-timeline-calculator",
      "weekly-weight-change-calculator",
      "monthly-weight-change-calculator"
    ]
  },
  {
    "id": 52,
    "name": "Weight Gain Timeline",
    "slug": "weight-gain-timeline-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "7700 kcal / kg muscle & mass",
    "shortDesc": "Calculate estimated timeline to build target kilograms of body mass.",
    "seoTitle": "Weight Gain Timeline — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Weight Gain Timeline (7700 kcal / kg muscle & mass). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "7700 kcal / kg muscle & mass",
    "formulaExplanation": "The Weight Gain Timeline is powered by the 7700 kcal / kg muscle & mass protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of weight gain timeline is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "currentWeight",
        "label": "Current Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 60,
        "min": 30,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "targetWeight",
        "label": "Target Goal Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 68,
        "min": 30,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "dailySurplus",
        "label": "Daily Calorie Surplus",
        "type": "select",
        "options": [
          {
            "label": "Lean Hypertrophy (+300 kcal/day)",
            "value": "300"
          },
          {
            "label": "Standard Hypertrophy (+500 kcal/day)",
            "value": "500"
          }
        ],
        "defaultValue": "400"
      }
    ],
    "faqs": [
      {
        "q": "What does the Weight Gain Timeline measure?",
        "a": "The Weight Gain Timeline calculates your calculate estimated timeline to build target kilograms of body mass.. It applies validated clinical formulas (7700 kcal / kg muscle & mass) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Weight Gain Timeline?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Weight Gain Timeline?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weekly-weight-change-calculator",
      "monthly-weight-change-calculator"
    ]
  },
  {
    "id": 53,
    "name": "Weekly Weight Change",
    "slug": "weekly-weight-change-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "Weekly energy balance",
    "shortDesc": "Forecast weekly weight changes based on daily caloric deficit or surplus.",
    "seoTitle": "Weekly Weight Change — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Weekly Weight Change (Weekly energy balance). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Weekly energy balance",
    "formulaExplanation": "The Weekly Weight Change is powered by the Weekly energy balance protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of weekly weight change is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyBalance",
        "label": "Daily Calorie Imbalance (+ Surplus / - Deficit)",
        "type": "number",
        "unit": "kcal/day",
        "defaultValue": -500,
        "min": -1500,
        "max": 1500,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Weekly Weight Change measure?",
        "a": "The Weekly Weight Change calculates your forecast weekly weight changes based on daily caloric deficit or surplus.. It applies validated clinical formulas (Weekly energy balance) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Weekly Weight Change?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Weekly Weight Change?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weight-gain-timeline-calculator",
      "monthly-weight-change-calculator"
    ]
  },
  {
    "id": 54,
    "name": "Monthly Weight Change",
    "slug": "monthly-weight-change-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "Monthly energy balance",
    "shortDesc": "Project 30-day weight transformation based on sustained caloric balance.",
    "seoTitle": "Monthly Weight Change — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Monthly Weight Change (Monthly energy balance). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Monthly energy balance",
    "formulaExplanation": "The Monthly Weight Change is powered by the Monthly energy balance protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of monthly weight change is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyBalance",
        "label": "Daily Calorie Imbalance (+ Surplus / - Deficit)",
        "type": "number",
        "unit": "kcal/day",
        "defaultValue": -500,
        "min": -1500,
        "max": 1500,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Monthly Weight Change measure?",
        "a": "The Monthly Weight Change calculates your project 30-day weight transformation based on sustained caloric balance.. It applies validated clinical formulas (Monthly energy balance) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Monthly Weight Change?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Monthly Weight Change?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weight-gain-timeline-calculator",
      "weekly-weight-change-calculator"
    ]
  },
  {
    "id": 55,
    "name": "Target Weight Calculator",
    "slug": "target-weight-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "Goal BMI × Height²",
    "shortDesc": "Calculate your ideal goal weight for a specific target BMI.",
    "seoTitle": "Target Weight Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Target Weight Calculator (Goal BMI × Height²). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Goal BMI × Height²",
    "formulaExplanation": "The Target Weight Calculator is powered by the Goal BMI × Height² protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of target weight calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 172,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "targetBmi",
        "label": "Desired Goal BMI",
        "type": "number",
        "unit": "kg/m²",
        "defaultValue": 22,
        "min": 18.5,
        "max": 28,
        "step": 0.5
      }
    ],
    "faqs": [
      {
        "q": "What does the Target Weight Calculator measure?",
        "a": "The Target Weight Calculator calculates your calculate your ideal goal weight for a specific target bmi.. It applies validated clinical formulas (Goal BMI × Height²) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Target Weight Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Target Weight Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weight-gain-timeline-calculator",
      "weekly-weight-change-calculator"
    ]
  },
  {
    "id": 56,
    "name": "Weight Difference Calculator",
    "slug": "weight-difference-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "Current vs Target",
    "shortDesc": "Measure the exact weight gap between where you are and your goal.",
    "seoTitle": "Weight Difference Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Weight Difference Calculator (Current vs Target). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Current vs Target",
    "formulaExplanation": "The Weight Difference Calculator is powered by the Current vs Target protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of weight difference calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "currentWeight",
        "label": "Current Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 80,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "targetWeight",
        "label": "Target Goal Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 68,
        "min": 30,
        "max": 250,
        "step": 0.5
      }
    ],
    "faqs": [
      {
        "q": "What does the Weight Difference Calculator measure?",
        "a": "The Weight Difference Calculator calculates your measure the exact weight gap between where you are and your goal.. It applies validated clinical formulas (Current vs Target) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Weight Difference Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Weight Difference Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weight-gain-timeline-calculator",
      "weekly-weight-change-calculator"
    ]
  },
  {
    "id": 57,
    "name": "Calorie-to-Weight Calculator",
    "slug": "calorie-to-weight-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "7700 kcal per 1 kg fat",
    "shortDesc": "Convert calories burned or consumed directly into body fat kilograms.",
    "seoTitle": "Calorie-to-Weight Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Calorie-to-Weight Calculator (7700 kcal per 1 kg fat). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "7700 kcal per 1 kg fat",
    "formulaExplanation": "The Calorie-to-Weight Calculator is powered by the 7700 kcal per 1 kg fat protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of calorie-to-weight calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "dailyBalance",
        "label": "Daily Calorie Imbalance (+ Surplus / - Deficit)",
        "type": "number",
        "unit": "kcal/day",
        "defaultValue": -500,
        "min": -1500,
        "max": 1500,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Calorie-to-Weight Calculator measure?",
        "a": "The Calorie-to-Weight Calculator calculates your convert calories burned or consumed directly into body fat kilograms.. It applies validated clinical formulas (7700 kcal per 1 kg fat) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Calorie-to-Weight Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Calorie-to-Weight Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weight-gain-timeline-calculator",
      "weekly-weight-change-calculator"
    ]
  },
  {
    "id": 58,
    "name": "Weight Loss Percentage",
    "slug": "weight-loss-percentage-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "Weight reduction %",
    "shortDesc": "Determine total percentage of baseline body weight successfully dropped.",
    "seoTitle": "Weight Loss Percentage — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Weight Loss Percentage (Weight reduction %). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Weight reduction %",
    "formulaExplanation": "The Weight Loss Percentage is powered by the Weight reduction % protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of weight loss percentage is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "initialWeight",
        "label": "Starting Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 85,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "currentWeight",
        "label": "Current Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 78,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "goalWeight",
        "label": "Ultimate Goal Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      }
    ],
    "faqs": [
      {
        "q": "What does the Weight Loss Percentage measure?",
        "a": "The Weight Loss Percentage calculates your determine total percentage of baseline body weight successfully dropped.. It applies validated clinical formulas (Weight reduction %) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Weight Loss Percentage?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Weight Loss Percentage?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weight-gain-timeline-calculator",
      "weekly-weight-change-calculator"
    ]
  },
  {
    "id": 59,
    "name": "Weight Gain Percentage",
    "slug": "weight-gain-percentage-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "Weight gain %",
    "shortDesc": "Measure percentage gain over baseline weight for bulking or recovery.",
    "seoTitle": "Weight Gain Percentage — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Weight Gain Percentage (Weight gain %). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Weight gain %",
    "formulaExplanation": "The Weight Gain Percentage is powered by the Weight gain % protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of weight gain percentage is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "initialWeight",
        "label": "Starting Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 85,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "currentWeight",
        "label": "Current Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 78,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "goalWeight",
        "label": "Ultimate Goal Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      }
    ],
    "faqs": [
      {
        "q": "What does the Weight Gain Percentage measure?",
        "a": "The Weight Gain Percentage calculates your measure percentage gain over baseline weight for bulking or recovery.. It applies validated clinical formulas (Weight gain %) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Weight Gain Percentage?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Weight Gain Percentage?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weight-gain-timeline-calculator",
      "weekly-weight-change-calculator"
    ]
  },
  {
    "id": 60,
    "name": "Progress Percentage",
    "slug": "progress-percentage-calculator",
    "category": "weight-management",
    "categoryName": "Weight Management Calculators",
    "categoryIcon": "TrendingDown",
    "themeColor": "#dc2626",
    "themeBg": "#fef2f2",
    "calculation": "Goal completion %",
    "shortDesc": "Track completion percentage toward your ultimate body transformation milestone.",
    "seoTitle": "Progress Percentage — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Progress Percentage (Goal completion %). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Goal completion %",
    "formulaExplanation": "The Progress Percentage is powered by the Goal completion % protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of progress percentage is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "initialWeight",
        "label": "Starting Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 85,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "currentWeight",
        "label": "Current Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 78,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "goalWeight",
        "label": "Ultimate Goal Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      }
    ],
    "faqs": [
      {
        "q": "What does the Progress Percentage measure?",
        "a": "The Progress Percentage calculates your track completion percentage toward your ultimate body transformation milestone.. It applies validated clinical formulas (Goal completion %) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Progress Percentage?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Progress Percentage?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "weight-loss-timeline-calculator",
      "weight-gain-timeline-calculator",
      "weekly-weight-change-calculator"
    ]
  },
  {
    "id": 61,
    "name": "Food Calorie Calculator",
    "slug": "food-calorie-calculator",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "4-4-9 Atwater energy factors",
    "shortDesc": "Compute exact food calories from protein, carbohydrate, fat, and fiber content.",
    "seoTitle": "Food Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Food Calorie Calculator (4-4-9 Atwater energy factors). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "4-4-9 Atwater energy factors",
    "formulaExplanation": "The Food Calorie Calculator is powered by the 4-4-9 Atwater energy factors protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of food calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "protein",
        "label": "Protein",
        "type": "number",
        "unit": "g",
        "defaultValue": 25,
        "min": 0,
        "max": 500,
        "step": 1
      },
      {
        "id": "carbs",
        "label": "Total Carbohydrates",
        "type": "number",
        "unit": "g",
        "defaultValue": 55,
        "min": 0,
        "max": 500,
        "step": 1
      },
      {
        "id": "fat",
        "label": "Total Fat",
        "type": "number",
        "unit": "g",
        "defaultValue": 14,
        "min": 0,
        "max": 300,
        "step": 1
      },
      {
        "id": "fiber",
        "label": "Dietary Fiber",
        "type": "number",
        "unit": "g",
        "defaultValue": 8,
        "min": 0,
        "max": 100,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Food Calorie Calculator measure?",
        "a": "The Food Calorie Calculator calculates your compute exact food calories from protein, carbohydrate, fat, and fiber content.. It applies validated clinical formulas (4-4-9 Atwater energy factors) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Food Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Food Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-protein-calculator",
      "food-carbohydrate-calculator",
      "food-fat-calculator"
    ]
  },
  {
    "id": 62,
    "name": "Food Protein Calculator",
    "slug": "food-protein-calculator",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "Protein grams to energy",
    "shortDesc": "Assess protein density and caloric percentage in single foods and snacks.",
    "seoTitle": "Food Protein Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Food Protein Calculator (Protein grams to energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Protein grams to energy",
    "formulaExplanation": "The Food Protein Calculator is powered by the Protein grams to energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of food protein calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "nutrientGrams",
        "label": "Nutrient Amount",
        "type": "number",
        "unit": "g",
        "defaultValue": 30,
        "min": 0,
        "max": 500,
        "step": 1
      },
      {
        "id": "servingWeight",
        "label": "Food Portion Weight",
        "type": "number",
        "unit": "g",
        "defaultValue": 150,
        "min": 10,
        "max": 2000,
        "step": 10
      }
    ],
    "faqs": [
      {
        "q": "What does the Food Protein Calculator measure?",
        "a": "The Food Protein Calculator calculates your assess protein density and caloric percentage in single foods and snacks.. It applies validated clinical formulas (Protein grams to energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Food Protein Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Food Protein Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-carbohydrate-calculator",
      "food-fat-calculator"
    ]
  },
  {
    "id": 63,
    "name": "Food Carbohydrate Calculator",
    "slug": "food-carbohydrate-calculator",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "Carb grams to energy",
    "shortDesc": "Calculate energy and net carbs provided by foods and grains.",
    "seoTitle": "Food Carbohydrate Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Food Carbohydrate Calculator (Carb grams to energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Carb grams to energy",
    "formulaExplanation": "The Food Carbohydrate Calculator is powered by the Carb grams to energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of food carbohydrate calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "nutrientGrams",
        "label": "Nutrient Amount",
        "type": "number",
        "unit": "g",
        "defaultValue": 30,
        "min": 0,
        "max": 500,
        "step": 1
      },
      {
        "id": "servingWeight",
        "label": "Food Portion Weight",
        "type": "number",
        "unit": "g",
        "defaultValue": 150,
        "min": 10,
        "max": 2000,
        "step": 10
      }
    ],
    "faqs": [
      {
        "q": "What does the Food Carbohydrate Calculator measure?",
        "a": "The Food Carbohydrate Calculator calculates your calculate energy and net carbs provided by foods and grains.. It applies validated clinical formulas (Carb grams to energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Food Carbohydrate Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Food Carbohydrate Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-protein-calculator",
      "food-fat-calculator"
    ]
  },
  {
    "id": 64,
    "name": "Food Fat Calculator",
    "slug": "food-fat-calculator",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "Fat grams to energy",
    "shortDesc": "Determine caloric contribution from fats (9 kcal/g) in any food item.",
    "seoTitle": "Food Fat Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Food Fat Calculator (Fat grams to energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Fat grams to energy",
    "formulaExplanation": "The Food Fat Calculator is powered by the Fat grams to energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of food fat calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "nutrientGrams",
        "label": "Nutrient Amount",
        "type": "number",
        "unit": "g",
        "defaultValue": 30,
        "min": 0,
        "max": 500,
        "step": 1
      },
      {
        "id": "servingWeight",
        "label": "Food Portion Weight",
        "type": "number",
        "unit": "g",
        "defaultValue": 150,
        "min": 10,
        "max": 2000,
        "step": 10
      }
    ],
    "faqs": [
      {
        "q": "What does the Food Fat Calculator measure?",
        "a": "The Food Fat Calculator calculates your determine caloric contribution from fats (9 kcal/g) in any food item.. It applies validated clinical formulas (Fat grams to energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Food Fat Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Food Fat Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-protein-calculator",
      "food-carbohydrate-calculator"
    ]
  },
  {
    "id": 65,
    "name": "Food Fiber Calculator",
    "slug": "food-fiber-calculator",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "Fiber density per 100g",
    "shortDesc": "Calculate dietary fiber percentage and daily value contribution per serving.",
    "seoTitle": "Food Fiber Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Food Fiber Calculator (Fiber density per 100g). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Fiber density per 100g",
    "formulaExplanation": "The Food Fiber Calculator is powered by the Fiber density per 100g protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of food fiber calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "nutrientGrams",
        "label": "Nutrient Amount",
        "type": "number",
        "unit": "g",
        "defaultValue": 30,
        "min": 0,
        "max": 500,
        "step": 1
      },
      {
        "id": "servingWeight",
        "label": "Food Portion Weight",
        "type": "number",
        "unit": "g",
        "defaultValue": 150,
        "min": 10,
        "max": 2000,
        "step": 10
      }
    ],
    "faqs": [
      {
        "q": "What does the Food Fiber Calculator measure?",
        "a": "The Food Fiber Calculator calculates your calculate dietary fiber percentage and daily value contribution per serving.. It applies validated clinical formulas (Fiber density per 100g) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Food Fiber Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Food Fiber Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-protein-calculator",
      "food-carbohydrate-calculator"
    ]
  },
  {
    "id": 66,
    "name": "Food Energy Converter",
    "slug": "food-energy-converter",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "1 kcal = 4.184 kJ",
    "shortDesc": "Instantly convert food energy values between Kilocalories (kcal) and Kilojoules (kJ).",
    "seoTitle": "Food Energy Converter — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Food Energy Converter (1 kcal = 4.184 kJ). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "1 kcal = 4.184 kJ",
    "formulaExplanation": "The Food Energy Converter is powered by the 1 kcal = 4.184 kJ protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of food energy converter is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "inputValue",
        "label": "Energy Value",
        "type": "number",
        "unit": "",
        "defaultValue": 500,
        "min": 0,
        "max": 50000,
        "step": 10
      },
      {
        "id": "conversionType",
        "label": "Conversion Direction",
        "type": "select",
        "options": [
          {
            "label": "Kilocalories (kcal) ➔ Kilojoules (kJ)",
            "value": "kcalToKj"
          },
          {
            "label": "Kilojoules (kJ) ➔ Kilocalories (kcal)",
            "value": "kjToKcal"
          }
        ],
        "defaultValue": "kcalToKj"
      }
    ],
    "faqs": [
      {
        "q": "What does the Food Energy Converter measure?",
        "a": "The Food Energy Converter calculates your instantly convert food energy values between kilocalories (kcal) and kilojoules (kj).. It applies validated clinical formulas (1 kcal = 4.184 kJ) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Food Energy Converter?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Food Energy Converter?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-protein-calculator",
      "food-carbohydrate-calculator"
    ]
  },
  {
    "id": 67,
    "name": "Raw to Cooked Weight",
    "slug": "raw-to-cooked-weight-calculator",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "Hydration & shrinkage ratio",
    "shortDesc": "Convert raw rice, pulses, and meats into cooked meal portion equivalents.",
    "seoTitle": "Raw to Cooked Weight — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Raw to Cooked Weight (Hydration & shrinkage ratio). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Hydration & shrinkage ratio",
    "formulaExplanation": "The Raw to Cooked Weight is powered by the Hydration & shrinkage ratio protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of raw to cooked weight is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "rawWeight",
        "label": "Raw Weight",
        "type": "number",
        "unit": "g",
        "defaultValue": 100,
        "min": 10,
        "max": 5000,
        "step": 10
      },
      {
        "id": "foodType",
        "label": "Food Category",
        "type": "select",
        "options": [
          {
            "label": "White / Brown Rice (Yield ~2.5x - 3x)",
            "value": "rice"
          },
          {
            "label": "Lentils / Dal / Pulses (Yield ~2.2x - 2.5x)",
            "value": "dal"
          },
          {
            "label": "Oats / Porridge (Yield ~3.5x)",
            "value": "oats"
          },
          {
            "label": "Chicken Breast / Fish (Shrinks ~0.75x)",
            "value": "meat"
          },
          {
            "label": "Spinach / Leafy Greens (Cooks down ~0.4x)",
            "value": "greens"
          }
        ],
        "defaultValue": "rice"
      }
    ],
    "faqs": [
      {
        "q": "What does the Raw to Cooked Weight measure?",
        "a": "The Raw to Cooked Weight calculates your convert raw rice, pulses, and meats into cooked meal portion equivalents.. It applies validated clinical formulas (Hydration & shrinkage ratio) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Raw to Cooked Weight?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Raw to Cooked Weight?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-protein-calculator",
      "food-carbohydrate-calculator"
    ]
  },
  {
    "id": 68,
    "name": "Recipe Scaling Calculator",
    "slug": "recipe-scaling-calculator",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "Ingredient multiplier factor",
    "shortDesc": "Scale recipe ingredient quantities up or down for any party or family size.",
    "seoTitle": "Recipe Scaling Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Recipe Scaling Calculator (Ingredient multiplier factor). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Ingredient multiplier factor",
    "formulaExplanation": "The Recipe Scaling Calculator is powered by the Ingredient multiplier factor protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of recipe scaling calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "originalServings",
        "label": "Original Recipe Servings",
        "type": "number",
        "unit": "servings",
        "defaultValue": 4,
        "min": 1,
        "max": 100,
        "step": 1
      },
      {
        "id": "targetServings",
        "label": "Target Desired Servings",
        "type": "number",
        "unit": "servings",
        "defaultValue": 10,
        "min": 1,
        "max": 500,
        "step": 1
      },
      {
        "id": "ingredientAmount",
        "label": "Example Ingredient Amount",
        "type": "number",
        "unit": "g or units",
        "defaultValue": 250,
        "min": 1,
        "max": 10000,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Recipe Scaling Calculator measure?",
        "a": "The Recipe Scaling Calculator calculates your scale recipe ingredient quantities up or down for any party or family size.. It applies validated clinical formulas (Ingredient multiplier factor) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Recipe Scaling Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Recipe Scaling Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-protein-calculator",
      "food-carbohydrate-calculator"
    ]
  },
  {
    "id": 69,
    "name": "Food Portion Converter",
    "slug": "food-portion-converter",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "Grams / cups / tbsp / tsp",
    "shortDesc": "Convert kitchen volume measurements (cups, spoons, katoris) to precise grams.",
    "seoTitle": "Food Portion Converter — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Food Portion Converter (Grams / cups / tbsp / tsp). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Grams / cups / tbsp / tsp",
    "formulaExplanation": "The Food Portion Converter is powered by the Grams / cups / tbsp / tsp protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of food portion converter is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "targetCalories",
        "label": "Desired Meal Energy",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 450,
        "min": 50,
        "max": 2000,
        "step": 25
      },
      {
        "id": "calPer100g",
        "label": "Food Calorie Density (kcal per 100g)",
        "type": "number",
        "unit": "kcal/100g",
        "defaultValue": 130,
        "min": 10,
        "max": 900,
        "step": 5
      }
    ],
    "faqs": [
      {
        "q": "What does the Food Portion Converter measure?",
        "a": "The Food Portion Converter calculates your convert kitchen volume measurements (cups, spoons, katoris) to precise grams.. It applies validated clinical formulas (Grams / cups / tbsp / tsp) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Food Portion Converter?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Food Portion Converter?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-protein-calculator",
      "food-carbohydrate-calculator"
    ]
  },
  {
    "id": 70,
    "name": "Oil Calorie Calculator",
    "slug": "oil-calorie-calculator",
    "category": "nutrition-food",
    "categoryName": "Nutrition & Food Calculators",
    "categoryIcon": "Apple",
    "themeColor": "#16a34a",
    "themeBg": "#f0fdf4",
    "calculation": "Cooking oil energy",
    "shortDesc": "Track hidden cooking oil calories (1 tsp = ~45 kcal, 1 tbsp = ~135 kcal).",
    "seoTitle": "Oil Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Oil Calorie Calculator (Cooking oil energy). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Cooking oil energy",
    "formulaExplanation": "The Oil Calorie Calculator is powered by the Cooking oil energy protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of oil calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "spoonsCount",
        "label": "Quantity of Cooking Oil",
        "type": "number",
        "unit": "",
        "defaultValue": 3,
        "min": 0.5,
        "max": 30,
        "step": 0.5
      },
      {
        "id": "spoonType",
        "label": "Measure Unit",
        "type": "select",
        "options": [
          {
            "label": "Teaspoon (5 ml — approx 45 kcal)",
            "value": "tsp"
          },
          {
            "label": "Tablespoon (15 ml — approx 135 kcal)",
            "value": "tbsp"
          }
        ],
        "defaultValue": "tsp"
      }
    ],
    "faqs": [
      {
        "q": "What does the Oil Calorie Calculator measure?",
        "a": "The Oil Calorie Calculator calculates your track hidden cooking oil calories (1 tsp = ~45 kcal, 1 tbsp = ~135 kcal).. It applies validated clinical formulas (Cooking oil energy) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Oil Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Oil Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "food-calorie-calculator",
      "food-protein-calculator",
      "food-carbohydrate-calculator"
    ]
  },
  {
    "id": 71,
    "name": "Pregnancy Calorie Calculator",
    "slug": "pregnancy-calorie-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Trimester energy increment",
    "shortDesc": "Calculate maternal caloric recommendations for 1st, 2nd, and 3rd trimesters.",
    "seoTitle": "Pregnancy Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Pregnancy Calorie Calculator (Trimester energy increment). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Trimester energy increment",
    "formulaExplanation": "The Pregnancy Calorie Calculator is powered by the Trimester energy increment protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of pregnancy calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "preWeight",
        "label": "Pre-Pregnancy Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 60,
        "min": 35,
        "max": 150,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 162,
        "min": 120,
        "max": 220,
        "step": 1
      },
      {
        "id": "trimester",
        "label": "Current Trimester",
        "type": "select",
        "options": [
          {
            "label": "1st Trimester (Weeks 1 - 13: +0 kcal)",
            "value": "1"
          },
          {
            "label": "2nd Trimester (Weeks 14 - 27: +340 kcal)",
            "value": "2"
          },
          {
            "label": "3rd Trimester (Weeks 28 - 40: +450 kcal)",
            "value": "3"
          }
        ],
        "defaultValue": "2"
      }
    ],
    "faqs": [
      {
        "q": "What does the Pregnancy Calorie Calculator measure?",
        "a": "The Pregnancy Calorie Calculator calculates your calculate maternal caloric recommendations for 1st, 2nd, and 3rd trimesters.. It applies validated clinical formulas (Trimester energy increment) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Pregnancy Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Pregnancy Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "breastfeeding-calorie-calculator",
      "child-calorie-calculator",
      "teen-nutrition-calculator"
    ]
  },
  {
    "id": 72,
    "name": "Breastfeeding Calorie Calculator",
    "slug": "breastfeeding-calorie-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Lactation +500 kcal/day",
    "shortDesc": "Determine daily energy needs to support optimal breast milk production.",
    "seoTitle": "Breastfeeding Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Breastfeeding Calorie Calculator (Lactation +500 kcal/day). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Lactation +500 kcal/day",
    "formulaExplanation": "The Breastfeeding Calorie Calculator is powered by the Lactation +500 kcal/day protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of breastfeeding calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Current Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 64,
        "min": 35,
        "max": 150,
        "step": 0.5
      },
      {
        "id": "feedingType",
        "label": "Feeding Status",
        "type": "select",
        "options": [
          {
            "label": "Exclusive Breastfeeding (0-6 months: +500 kcal)",
            "value": "exclusive"
          },
          {
            "label": "Partial / Weaning (6-12 months: +350 kcal)",
            "value": "partial"
          }
        ],
        "defaultValue": "exclusive"
      }
    ],
    "faqs": [
      {
        "q": "What does the Breastfeeding Calorie Calculator measure?",
        "a": "The Breastfeeding Calorie Calculator calculates your determine daily energy needs to support optimal breast milk production.. It applies validated clinical formulas (Lactation +500 kcal/day) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Breastfeeding Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Breastfeeding Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "child-calorie-calculator",
      "teen-nutrition-calculator"
    ]
  },
  {
    "id": 73,
    "name": "Child Calorie Calculator",
    "slug": "child-calorie-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Pediatric growth requirement",
    "shortDesc": "Calculate daily caloric and nutrient recommendations for growing children.",
    "seoTitle": "Child Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Child Calorie Calculator (Pediatric growth requirement). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Pediatric growth requirement",
    "formulaExplanation": "The Child Calorie Calculator is powered by the Pediatric growth requirement protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of child calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "age",
        "label": "Child / Teen Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 11,
        "min": 2,
        "max": 18,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Boy",
            "value": "male"
          },
          {
            "label": "Girl",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      },
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 36,
        "min": 10,
        "max": 120,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 142,
        "min": 70,
        "max": 210,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Child Calorie Calculator measure?",
        "a": "The Child Calorie Calculator calculates your calculate daily caloric and nutrient recommendations for growing children.. It applies validated clinical formulas (Pediatric growth requirement) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Child Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Child Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "breastfeeding-calorie-calculator",
      "teen-nutrition-calculator"
    ]
  },
  {
    "id": 74,
    "name": "Teen Nutrition Calculator",
    "slug": "teen-nutrition-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Adolescent growth spurt needs",
    "shortDesc": "Determine caloric, calcium, and protein targets during teenage growth spurts.",
    "seoTitle": "Teen Nutrition Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Teen Nutrition Calculator (Adolescent growth spurt needs). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Adolescent growth spurt needs",
    "formulaExplanation": "The Teen Nutrition Calculator is powered by the Adolescent growth spurt needs protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of teen nutrition calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "age",
        "label": "Child / Teen Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 11,
        "min": 2,
        "max": 18,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Boy",
            "value": "male"
          },
          {
            "label": "Girl",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      },
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 36,
        "min": 10,
        "max": 120,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 142,
        "min": 70,
        "max": 210,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Teen Nutrition Calculator measure?",
        "a": "The Teen Nutrition Calculator calculates your determine caloric, calcium, and protein targets during teenage growth spurts.. It applies validated clinical formulas (Adolescent growth spurt needs) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Teen Nutrition Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Teen Nutrition Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "breastfeeding-calorie-calculator",
      "child-calorie-calculator"
    ]
  },
  {
    "id": 75,
    "name": "Senior Nutrition Calculator",
    "slug": "senior-nutrition-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Geriatric energy & protein",
    "shortDesc": "Tailor nutrition for seniors—focusing on muscle sparing (sarcopenia prevention).",
    "seoTitle": "Senior Nutrition Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Senior Nutrition Calculator (Geriatric energy & protein). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Geriatric energy & protein",
    "formulaExplanation": "The Senior Nutrition Calculator is powered by the Geriatric energy & protein protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of senior nutrition calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 66,
        "min": 30,
        "max": 180,
        "step": 0.5
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 68,
        "min": 60,
        "max": 105,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Senior Nutrition Calculator measure?",
        "a": "The Senior Nutrition Calculator calculates your tailor nutrition for seniors—focusing on muscle sparing (sarcopenia prevention).. It applies validated clinical formulas (Geriatric energy & protein) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Senior Nutrition Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Senior Nutrition Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "breastfeeding-calorie-calculator",
      "child-calorie-calculator"
    ]
  },
  {
    "id": 76,
    "name": "Athlete Calorie Calculator",
    "slug": "athlete-calorie-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "45-60 kcal/kg athletic demand",
    "shortDesc": "Estimate high-performance caloric fueling for competitive athletes.",
    "seoTitle": "Athlete Calorie Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Athlete Calorie Calculator (45-60 kcal/kg athletic demand). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "45-60 kcal/kg athletic demand",
    "formulaExplanation": "The Athlete Calorie Calculator is powered by the 45-60 kcal/kg athletic demand protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of athlete calorie calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Athlete Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 74,
        "min": 40,
        "max": 180,
        "step": 0.5
      },
      {
        "id": "trainingHours",
        "label": "Daily Training Volume",
        "type": "number",
        "unit": "hours",
        "defaultValue": 2,
        "min": 0.5,
        "max": 8,
        "step": 0.5
      },
      {
        "id": "intensity",
        "label": "Sport Intensity",
        "type": "select",
        "options": [
          {
            "label": "Moderate Endurance / Skill",
            "value": "moderate"
          },
          {
            "label": "High Endurance / Competitive",
            "value": "high"
          },
          {
            "label": "Elite Heavy Volume",
            "value": "elite"
          }
        ],
        "defaultValue": "high"
      }
    ],
    "faqs": [
      {
        "q": "What does the Athlete Calorie Calculator measure?",
        "a": "The Athlete Calorie Calculator calculates your estimate high-performance caloric fueling for competitive athletes.. It applies validated clinical formulas (45-60 kcal/kg athletic demand) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Athlete Calorie Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Athlete Calorie Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "breastfeeding-calorie-calculator",
      "child-calorie-calculator"
    ]
  },
  {
    "id": 77,
    "name": "Endurance Nutrition Calculator",
    "slug": "endurance-nutrition-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Carb fueling per hour",
    "shortDesc": "Determine hourly carbohydrate and sodium replenishment for marathoners and cyclists.",
    "seoTitle": "Endurance Nutrition Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Endurance Nutrition Calculator (Carb fueling per hour). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Carb fueling per hour",
    "formulaExplanation": "The Endurance Nutrition Calculator is powered by the Carb fueling per hour protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of endurance nutrition calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Athlete Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 74,
        "min": 40,
        "max": 180,
        "step": 0.5
      },
      {
        "id": "trainingHours",
        "label": "Daily Training Volume",
        "type": "number",
        "unit": "hours",
        "defaultValue": 2,
        "min": 0.5,
        "max": 8,
        "step": 0.5
      },
      {
        "id": "intensity",
        "label": "Sport Intensity",
        "type": "select",
        "options": [
          {
            "label": "Moderate Endurance / Skill",
            "value": "moderate"
          },
          {
            "label": "High Endurance / Competitive",
            "value": "high"
          },
          {
            "label": "Elite Heavy Volume",
            "value": "elite"
          }
        ],
        "defaultValue": "high"
      }
    ],
    "faqs": [
      {
        "q": "What does the Endurance Nutrition Calculator measure?",
        "a": "The Endurance Nutrition Calculator calculates your determine hourly carbohydrate and sodium replenishment for marathoners and cyclists.. It applies validated clinical formulas (Carb fueling per hour) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Endurance Nutrition Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Endurance Nutrition Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "breastfeeding-calorie-calculator",
      "child-calorie-calculator"
    ]
  },
  {
    "id": 78,
    "name": "Muscle Gain Calculator",
    "slug": "muscle-gain-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Hypertrophy energy + protein",
    "shortDesc": "Calculate optimal caloric surplus and 2.0g/kg protein targets for bodybuilding.",
    "seoTitle": "Muscle Gain Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Muscle Gain Calculator (Hypertrophy energy + protein). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Hypertrophy energy + protein",
    "formulaExplanation": "The Muscle Gain Calculator is powered by the Hypertrophy energy + protein protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of muscle gain calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Athlete Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 74,
        "min": 40,
        "max": 180,
        "step": 0.5
      },
      {
        "id": "trainingHours",
        "label": "Daily Training Volume",
        "type": "number",
        "unit": "hours",
        "defaultValue": 2,
        "min": 0.5,
        "max": 8,
        "step": 0.5
      },
      {
        "id": "intensity",
        "label": "Sport Intensity",
        "type": "select",
        "options": [
          {
            "label": "Moderate Endurance / Skill",
            "value": "moderate"
          },
          {
            "label": "High Endurance / Competitive",
            "value": "high"
          },
          {
            "label": "Elite Heavy Volume",
            "value": "elite"
          }
        ],
        "defaultValue": "high"
      }
    ],
    "faqs": [
      {
        "q": "What does the Muscle Gain Calculator measure?",
        "a": "The Muscle Gain Calculator calculates your calculate optimal caloric surplus and 2.0g/kg protein targets for bodybuilding.. It applies validated clinical formulas (Hypertrophy energy + protein) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Muscle Gain Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Muscle Gain Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "breastfeeding-calorie-calculator",
      "child-calorie-calculator"
    ]
  },
  {
    "id": 79,
    "name": "Vegetarian Protein Calculator",
    "slug": "vegetarian-protein-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Plant-protein amino pairing",
    "shortDesc": "Assess protein quality and plant-based amino acid coverage for vegetarians.",
    "seoTitle": "Vegetarian Protein Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Vegetarian Protein Calculator (Plant-protein amino pairing). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Plant-protein amino pairing",
    "formulaExplanation": "The Vegetarian Protein Calculator is powered by the Plant-protein amino pairing protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of vegetarian protein calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 68,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "goal",
        "label": "Training Goal / Lifestyle",
        "type": "select",
        "options": [
          {
            "label": "Sedentary / Baseline Health (0.8 - 1.0 g/kg)",
            "value": "baseline"
          },
          {
            "label": "Fitness & Endurance (1.2 - 1.4 g/kg)",
            "value": "moderate"
          },
          {
            "label": "Fat Loss & Muscle Sparing (1.6 - 1.8 g/kg)",
            "value": "fatloss"
          },
          {
            "label": "Hypertrophy & Strength (2.0 - 2.2 g/kg)",
            "value": "muscle"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the Vegetarian Protein Calculator measure?",
        "a": "The Vegetarian Protein Calculator calculates your assess protein quality and plant-based amino acid coverage for vegetarians.. It applies validated clinical formulas (Plant-protein amino pairing) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Vegetarian Protein Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Vegetarian Protein Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "breastfeeding-calorie-calculator",
      "child-calorie-calculator"
    ]
  },
  {
    "id": 80,
    "name": "Vegan Nutrition Calculator",
    "slug": "vegan-nutrition-calculator",
    "category": "special-nutrition",
    "categoryName": "Special Nutrition Calculators",
    "categoryIcon": "Baby",
    "themeColor": "#db2777",
    "themeBg": "#fdf2f8",
    "calculation": "Vegan macros + B12/Iron/Zinc",
    "shortDesc": "Plan comprehensive vegan nutrition ensuring critical micronutrient fulfillment.",
    "seoTitle": "Vegan Nutrition Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Vegan Nutrition Calculator (Vegan macros + B12/Iron/Zinc). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Vegan macros + B12/Iron/Zinc",
    "formulaExplanation": "The Vegan Nutrition Calculator is powered by the Vegan macros + B12/Iron/Zinc protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of vegan nutrition calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 68,
        "min": 35,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "activity",
        "label": "Activity Level",
        "type": "select",
        "options": [
          {
            "label": "Light Active",
            "value": "light"
          },
          {
            "label": "Moderately Active",
            "value": "moderate"
          },
          {
            "label": "Very Active",
            "value": "active"
          }
        ],
        "defaultValue": "moderate"
      }
    ],
    "faqs": [
      {
        "q": "What does the Vegan Nutrition Calculator measure?",
        "a": "The Vegan Nutrition Calculator calculates your plan comprehensive vegan nutrition ensuring critical micronutrient fulfillment.. It applies validated clinical formulas (Vegan macros + B12/Iron/Zinc) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Vegan Nutrition Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Vegan Nutrition Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "pregnancy-calorie-calculator",
      "breastfeeding-calorie-calculator",
      "child-calorie-calculator"
    ]
  },
  {
    "id": 81,
    "name": "Diabetes Carbohydrate Calculator",
    "slug": "diabetes-carbohydrate-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "1 carb choice = 15g carbs",
    "shortDesc": "Count carbohydrate choices and meal carb distribution for blood sugar control.",
    "seoTitle": "Diabetes Carbohydrate Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Diabetes Carbohydrate Calculator (1 carb choice = 15g carbs). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "1 carb choice = 15g carbs",
    "formulaExplanation": "The Diabetes Carbohydrate Calculator is powered by the 1 carb choice = 15g carbs protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of diabetes carbohydrate calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "carbsGrams",
        "label": "Available Carbohydrates per Serving",
        "type": "number",
        "unit": "g",
        "defaultValue": 45,
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "id": "glycemicIndex",
        "label": "Food Glycemic Index (GI)",
        "type": "number",
        "unit": "GI index",
        "defaultValue": 58,
        "min": 0,
        "max": 120,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Diabetes Carbohydrate Calculator measure?",
        "a": "The Diabetes Carbohydrate Calculator calculates your count carbohydrate choices and meal carb distribution for blood sugar control.. It applies validated clinical formulas (1 carb choice = 15g carbs) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Diabetes Carbohydrate Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Diabetes Carbohydrate Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "glycemic-load-calculator",
      "glycemic-index-calculator",
      "sodium-restriction-calculator"
    ]
  },
  {
    "id": 82,
    "name": "Glycemic Load Calculator",
    "slug": "glycemic-load-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "(GI × Available Carbs) / 100",
    "shortDesc": "Calculate meal Glycemic Load (GL) to prevent postprandial glucose spikes.",
    "seoTitle": "Glycemic Load Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Glycemic Load Calculator ((GI × Available Carbs) / 100). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "(GI × Available Carbs) / 100",
    "formulaExplanation": "The Glycemic Load Calculator is powered by the (GI × Available Carbs) / 100 protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of glycemic load calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "carbsGrams",
        "label": "Available Carbohydrates per Serving",
        "type": "number",
        "unit": "g",
        "defaultValue": 45,
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "id": "glycemicIndex",
        "label": "Food Glycemic Index (GI)",
        "type": "number",
        "unit": "GI index",
        "defaultValue": 58,
        "min": 0,
        "max": 120,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Glycemic Load Calculator measure?",
        "a": "The Glycemic Load Calculator calculates your calculate meal glycemic load (gl) to prevent postprandial glucose spikes.. It applies validated clinical formulas ((GI × Available Carbs) / 100) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Glycemic Load Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Glycemic Load Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-index-calculator",
      "sodium-restriction-calculator"
    ]
  },
  {
    "id": 83,
    "name": "Glycemic Index Calculator",
    "slug": "glycemic-index-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "Weighted meal GI",
    "shortDesc": "Estimate composite Glycemic Index of mixed food plates.",
    "seoTitle": "Glycemic Index Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Glycemic Index Calculator (Weighted meal GI). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Weighted meal GI",
    "formulaExplanation": "The Glycemic Index Calculator is powered by the Weighted meal GI protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of glycemic index calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "carbsGrams",
        "label": "Available Carbohydrates per Serving",
        "type": "number",
        "unit": "g",
        "defaultValue": 45,
        "min": 0,
        "max": 200,
        "step": 1
      },
      {
        "id": "glycemicIndex",
        "label": "Food Glycemic Index (GI)",
        "type": "number",
        "unit": "GI index",
        "defaultValue": 58,
        "min": 0,
        "max": 120,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Glycemic Index Calculator measure?",
        "a": "The Glycemic Index Calculator calculates your estimate composite glycemic index of mixed food plates.. It applies validated clinical formulas (Weighted meal GI) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Glycemic Index Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Glycemic Index Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-load-calculator",
      "sodium-restriction-calculator"
    ]
  },
  {
    "id": 84,
    "name": "Sodium Restriction Calculator",
    "slug": "sodium-restriction-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "DASH diet 1500-2300mg",
    "shortDesc": "Calculate sodium limits for hypertension and congestive heart failure management.",
    "seoTitle": "Sodium Restriction Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Sodium Restriction Calculator (DASH diet 1500-2300mg). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "DASH diet 1500-2300mg",
    "formulaExplanation": "The Sodium Restriction Calculator is powered by the DASH diet 1500-2300mg protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of sodium restriction calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "condition",
        "label": "Clinical Target",
        "type": "select",
        "options": [
          {
            "label": "General Healthy Prevention (AHA standard)",
            "value": "standard"
          },
          {
            "label": "Hypertension / Pre-Hypertension (DASH strict)",
            "value": "hypertension"
          },
          {
            "label": "Heart Failure / Severe Edema",
            "value": "strict"
          }
        ],
        "defaultValue": "hypertension"
      }
    ],
    "faqs": [
      {
        "q": "What does the Sodium Restriction Calculator measure?",
        "a": "The Sodium Restriction Calculator calculates your calculate sodium limits for hypertension and congestive heart failure management.. It applies validated clinical formulas (DASH diet 1500-2300mg) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Sodium Restriction Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Sodium Restriction Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-load-calculator",
      "glycemic-index-calculator"
    ]
  },
  {
    "id": 85,
    "name": "Cholesterol Intake Calculator",
    "slug": "cholesterol-intake-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "Heart lipid target <200mg",
    "shortDesc": "Assess daily dietary cholesterol intake against cardiovascular safety targets.",
    "seoTitle": "Cholesterol Intake Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Cholesterol Intake Calculator (Heart lipid target <200mg). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Heart lipid target <200mg",
    "formulaExplanation": "The Cholesterol Intake Calculator is powered by the Heart lipid target <200mg protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of cholesterol intake calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "condition",
        "label": "Clinical Target",
        "type": "select",
        "options": [
          {
            "label": "General Healthy Prevention (AHA standard)",
            "value": "standard"
          },
          {
            "label": "Hypertension / Pre-Hypertension (DASH strict)",
            "value": "hypertension"
          },
          {
            "label": "Heart Failure / Severe Edema",
            "value": "strict"
          }
        ],
        "defaultValue": "hypertension"
      }
    ],
    "faqs": [
      {
        "q": "What does the Cholesterol Intake Calculator measure?",
        "a": "The Cholesterol Intake Calculator calculates your assess daily dietary cholesterol intake against cardiovascular safety targets.. It applies validated clinical formulas (Heart lipid target <200mg) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Cholesterol Intake Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Cholesterol Intake Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-load-calculator",
      "glycemic-index-calculator"
    ]
  },
  {
    "id": 86,
    "name": "Renal Protein Calculator",
    "slug": "renal-protein-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "CKD Stage 1-5 protein target",
    "shortDesc": "Determine kidney-safe protein targets for pre-dialysis or dialysis patients.",
    "seoTitle": "Renal Protein Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Renal Protein Calculator (CKD Stage 1-5 protein target). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "CKD Stage 1-5 protein target",
    "formulaExplanation": "The Renal Protein Calculator is powered by the CKD Stage 1-5 protein target protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of renal protein calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Dry Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 68,
        "min": 30,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "ckdStage",
        "label": "Kidney Disease Stage",
        "type": "select",
        "options": [
          {
            "label": "CKD Stage 1-2 (Early: 0.8 g/kg)",
            "value": "early"
          },
          {
            "label": "CKD Stage 3-5 Non-Dialysis (0.55 - 0.60 g/kg)",
            "value": "predialysis"
          },
          {
            "label": "Hemodialysis Maintenance (1.2 g/kg)",
            "value": "dialysis"
          },
          {
            "label": "Peritoneal Dialysis (1.2 - 1.3 g/kg)",
            "value": "pd"
          }
        ],
        "defaultValue": "predialysis"
      }
    ],
    "faqs": [
      {
        "q": "What does the Renal Protein Calculator measure?",
        "a": "The Renal Protein Calculator calculates your determine kidney-safe protein targets for pre-dialysis or dialysis patients.. It applies validated clinical formulas (CKD Stage 1-5 protein target) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Renal Protein Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Renal Protein Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-load-calculator",
      "glycemic-index-calculator"
    ]
  },
  {
    "id": 87,
    "name": "Renal Fluid Calculator",
    "slug": "renal-fluid-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "Urine Output + Insensible loss",
    "shortDesc": "Calculate strict fluid restriction limits for renal failure and dialysis care.",
    "seoTitle": "Renal Fluid Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Renal Fluid Calculator (Urine Output + Insensible loss). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Urine Output + Insensible loss",
    "formulaExplanation": "The Renal Fluid Calculator is powered by the Urine Output + Insensible loss protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of renal fluid calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Dry Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 68,
        "min": 30,
        "max": 200,
        "step": 0.5
      },
      {
        "id": "ckdStage",
        "label": "Kidney Disease Stage",
        "type": "select",
        "options": [
          {
            "label": "CKD Stage 1-2 (Early: 0.8 g/kg)",
            "value": "early"
          },
          {
            "label": "CKD Stage 3-5 Non-Dialysis (0.55 - 0.60 g/kg)",
            "value": "predialysis"
          },
          {
            "label": "Hemodialysis Maintenance (1.2 g/kg)",
            "value": "dialysis"
          },
          {
            "label": "Peritoneal Dialysis (1.2 - 1.3 g/kg)",
            "value": "pd"
          }
        ],
        "defaultValue": "predialysis"
      }
    ],
    "faqs": [
      {
        "q": "What does the Renal Fluid Calculator measure?",
        "a": "The Renal Fluid Calculator calculates your calculate strict fluid restriction limits for renal failure and dialysis care.. It applies validated clinical formulas (Urine Output + Insensible loss) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Renal Fluid Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Renal Fluid Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-load-calculator",
      "glycemic-index-calculator"
    ]
  },
  {
    "id": 88,
    "name": "Enteral Feeding Calculator",
    "slug": "enteral-feeding-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "Tube feed rate (ml/hr)",
    "shortDesc": "Calculate clinical enteral tube feeding rate and free water flushes.",
    "seoTitle": "Enteral Feeding Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Enteral Feeding Calculator (Tube feed rate (ml/hr)). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Tube feed rate (ml/hr)",
    "formulaExplanation": "The Enteral Feeding Calculator is powered by the Tube feed rate (ml/hr) protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of enteral feeding calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "targetCalories",
        "label": "Total Daily Target Energy",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 1800,
        "min": 500,
        "max": 4000,
        "step": 50
      },
      {
        "id": "formulaDensity",
        "label": "Formula Caloric Density",
        "type": "select",
        "options": [
          {
            "label": "Standard Formula (1.0 kcal/ml)",
            "value": "1.0"
          },
          {
            "label": "Concentrated / Fluid Restricted (1.2 kcal/ml)",
            "value": "1.2"
          },
          {
            "label": "High Calorie Renal (1.5 kcal/ml)",
            "value": "1.5"
          },
          {
            "label": "Dense Formula (2.0 kcal/ml)",
            "value": "2.0"
          }
        ],
        "defaultValue": "1.2"
      },
      {
        "id": "infusionHours",
        "label": "Infusion Duration",
        "type": "number",
        "unit": "hours/day",
        "defaultValue": 24,
        "min": 10,
        "max": 24,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Enteral Feeding Calculator measure?",
        "a": "The Enteral Feeding Calculator calculates your calculate clinical enteral tube feeding rate and free water flushes.. It applies validated clinical formulas (Tube feed rate (ml/hr)) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Enteral Feeding Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Enteral Feeding Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-load-calculator",
      "glycemic-index-calculator"
    ]
  },
  {
    "id": 89,
    "name": "Protein-Energy Ratio",
    "slug": "protein-energy-ratio-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "(Protein kcal / Total kcal) %",
    "shortDesc": "Compute clinical protein-to-energy ratio (P:E ratio) to evaluate diet quality.",
    "seoTitle": "Protein-Energy Ratio — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Protein-Energy Ratio ((Protein kcal / Total kcal) %). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "(Protein kcal / Total kcal) %",
    "formulaExplanation": "The Protein-Energy Ratio is powered by the (Protein kcal / Total kcal) % protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of protein-energy ratio is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "proteinGrams",
        "label": "Protein Amount",
        "type": "number",
        "unit": "g",
        "defaultValue": 75,
        "min": 0,
        "max": 300,
        "step": 1
      },
      {
        "id": "totalCalories",
        "label": "Total Caloric Content",
        "type": "number",
        "unit": "kcal",
        "defaultValue": 1800,
        "min": 200,
        "max": 6000,
        "step": 50
      }
    ],
    "faqs": [
      {
        "q": "What does the Protein-Energy Ratio measure?",
        "a": "The Protein-Energy Ratio calculates your compute clinical protein-to-energy ratio (p:e ratio) to evaluate diet quality.. It applies validated clinical formulas ((Protein kcal / Total kcal) %) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Protein-Energy Ratio?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Protein-Energy Ratio?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-load-calculator",
      "glycemic-index-calculator"
    ]
  },
  {
    "id": 90,
    "name": "Nutrition Risk Screening",
    "slug": "nutrition-risk-screening-calculator",
    "category": "clinical-nutrition",
    "categoryName": "Clinical Nutrition Calculators",
    "categoryIcon": "Stethoscope",
    "themeColor": "#0891b2",
    "themeBg": "#ecfeff",
    "calculation": "NRS-2002 / MUST score",
    "shortDesc": "Screen for clinical malnutrition risk using validated medical parameters.",
    "seoTitle": "Nutrition Risk Screening — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Nutrition Risk Screening (NRS-2002 / MUST score). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "NRS-2002 / MUST score",
    "formulaExplanation": "The Nutrition Risk Screening is powered by the NRS-2002 / MUST score protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of nutrition risk screening is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weightLossPct",
        "label": "Recent Unintentional Weight Loss (3 mos)",
        "type": "select",
        "options": [
          {
            "label": "< 5% (Score 0)",
            "value": "0"
          },
          {
            "label": "5% - 10% (Score 1)",
            "value": "1"
          },
          {
            "label": "> 10% (Score 2)",
            "value": "2"
          }
        ],
        "defaultValue": "0"
      },
      {
        "id": "bmiScore",
        "label": "Current BMI Status",
        "type": "select",
        "options": [
          {
            "label": "BMI > 20.5 (Score 0)",
            "value": "0"
          },
          {
            "label": "BMI 18.5 - 20.5 (Score 1)",
            "value": "1"
          },
          {
            "label": "BMI < 18.5 (Score 2)",
            "value": "2"
          }
        ],
        "defaultValue": "0"
      },
      {
        "id": "intakeReduction",
        "label": "Food Intake Reduction (Past week)",
        "type": "select",
        "options": [
          {
            "label": "Normal (Score 0)",
            "value": "0"
          },
          {
            "label": "Reduced by 25-50% (Score 1)",
            "value": "1"
          },
          {
            "label": "Reduced by > 50% (Score 2)",
            "value": "2"
          }
        ],
        "defaultValue": "0"
      }
    ],
    "faqs": [
      {
        "q": "What does the Nutrition Risk Screening measure?",
        "a": "The Nutrition Risk Screening calculates your screen for clinical malnutrition risk using validated medical parameters.. It applies validated clinical formulas (NRS-2002 / MUST score) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Nutrition Risk Screening?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Nutrition Risk Screening?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "diabetes-carbohydrate-calculator",
      "glycemic-load-calculator",
      "glycemic-index-calculator"
    ]
  },
  {
    "id": 91,
    "name": "Harris-Benedict Calculator",
    "slug": "harris-benedict-calculator",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "Harris-Benedict BMR equation",
    "shortDesc": "Calculate basal metabolic rate using the classic clinical Harris-Benedict formula.",
    "seoTitle": "Harris-Benedict Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Harris-Benedict Calculator (Harris-Benedict BMR equation). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Harris-Benedict BMR equation",
    "formulaExplanation": "The Harris-Benedict Calculator is powered by the Harris-Benedict BMR equation protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of harris-benedict calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 28,
        "min": 10,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Harris-Benedict Calculator measure?",
        "a": "The Harris-Benedict Calculator calculates your calculate basal metabolic rate using the classic clinical harris-benedict formula.. It applies validated clinical formulas (Harris-Benedict BMR equation) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Harris-Benedict Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Harris-Benedict Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "mifflin-st-jeor-calculator",
      "katch-mcardle-calculator",
      "schofield-calculator"
    ]
  },
  {
    "id": 92,
    "name": "Mifflin-St Jeor Calculator",
    "slug": "mifflin-st-jeor-calculator",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "Mifflin-St Jeor BMR equation",
    "shortDesc": "Use the ADA gold-standard clinical equation for accurate resting metabolism.",
    "seoTitle": "Mifflin-St Jeor Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Mifflin-St Jeor Calculator (Mifflin-St Jeor BMR equation). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Mifflin-St Jeor BMR equation",
    "formulaExplanation": "The Mifflin-St Jeor Calculator is powered by the Mifflin-St Jeor BMR equation protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of mifflin-st jeor calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 28,
        "min": 10,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Mifflin-St Jeor Calculator measure?",
        "a": "The Mifflin-St Jeor Calculator calculates your use the ada gold-standard clinical equation for accurate resting metabolism.. It applies validated clinical formulas (Mifflin-St Jeor BMR equation) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Mifflin-St Jeor Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Mifflin-St Jeor Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "katch-mcardle-calculator",
      "schofield-calculator"
    ]
  },
  {
    "id": 93,
    "name": "Katch-McArdle Calculator",
    "slug": "katch-mcardle-calculator",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "BMR = 370 + (21.6 × LBM)",
    "shortDesc": "Calculate metabolic rate based directly on lean body mass (ideal for lean athletes).",
    "seoTitle": "Katch-McArdle Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Katch-McArdle Calculator (BMR = 370 + (21.6 × LBM)). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "BMR = 370 + (21.6 × LBM)",
    "formulaExplanation": "The Katch-McArdle Calculator is powered by the BMR = 370 + (21.6 × LBM) protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of katch-mcardle calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Total Body Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 75,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "bodyFat",
        "label": "Body Fat %",
        "type": "number",
        "unit": "%",
        "defaultValue": 18,
        "min": 3,
        "max": 60,
        "step": 0.5
      }
    ],
    "faqs": [
      {
        "q": "What does the Katch-McArdle Calculator measure?",
        "a": "The Katch-McArdle Calculator calculates your calculate metabolic rate based directly on lean body mass (ideal for lean athletes).. It applies validated clinical formulas (BMR = 370 + (21.6 × LBM)) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Katch-McArdle Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Katch-McArdle Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "mifflin-st-jeor-calculator",
      "schofield-calculator"
    ]
  },
  {
    "id": 94,
    "name": "Schofield Calculator",
    "slug": "schofield-calculator",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "WHO/FAO BMR equation",
    "shortDesc": "Calculate clinical BMR using the WHO/Schofield international equations.",
    "seoTitle": "Schofield Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Schofield Calculator (WHO/FAO BMR equation). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "WHO/FAO BMR equation",
    "formulaExplanation": "The Schofield Calculator is powered by the WHO/FAO BMR equation protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of schofield calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 70,
        "min": 30,
        "max": 250,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "age",
        "label": "Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 28,
        "min": 10,
        "max": 100,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Schofield Calculator measure?",
        "a": "The Schofield Calculator calculates your calculate clinical bmr using the who/schofield international equations.. It applies validated clinical formulas (WHO/FAO BMR equation) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Schofield Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Schofield Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "mifflin-st-jeor-calculator",
      "katch-mcardle-calculator"
    ]
  },
  {
    "id": 95,
    "name": "BMI-for-Age Calculator",
    "slug": "bmi-for-age-calculator",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "CDC/WHO Growth Percentiles",
    "shortDesc": "Evaluate child and adolescent growth percentiles against pediatric standards.",
    "seoTitle": "BMI-for-Age Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free BMI-for-Age Calculator (CDC/WHO Growth Percentiles). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "CDC/WHO Growth Percentiles",
    "formulaExplanation": "The BMI-for-Age Calculator is powered by the CDC/WHO Growth Percentiles protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of bmi-for-age calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "age",
        "label": "Child / Teen Age",
        "type": "number",
        "unit": "years",
        "defaultValue": 11,
        "min": 2,
        "max": 18,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Boy",
            "value": "male"
          },
          {
            "label": "Girl",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      },
      {
        "id": "weight",
        "label": "Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 36,
        "min": 10,
        "max": 120,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 142,
        "min": 70,
        "max": 210,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the BMI-for-Age Calculator measure?",
        "a": "The BMI-for-Age Calculator calculates your evaluate child and adolescent growth percentiles against pediatric standards.. It applies validated clinical formulas (CDC/WHO Growth Percentiles) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this BMI-for-Age Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the BMI-for-Age Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "mifflin-st-jeor-calculator",
      "katch-mcardle-calculator"
    ]
  },
  {
    "id": 96,
    "name": "IBW Devine Calculator",
    "slug": "ibw-devine-calculator",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "Devine IBW standard",
    "shortDesc": "Calculate clinically recognized ideal body weight used in pharmacokinetics.",
    "seoTitle": "IBW Devine Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free IBW Devine Calculator (Devine IBW standard). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Devine IBW standard",
    "formulaExplanation": "The IBW Devine Calculator is powered by the Devine IBW standard protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of ibw devine calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the IBW Devine Calculator measure?",
        "a": "The IBW Devine Calculator calculates your calculate clinically recognized ideal body weight used in pharmacokinetics.. It applies validated clinical formulas (Devine IBW standard) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this IBW Devine Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the IBW Devine Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "mifflin-st-jeor-calculator",
      "katch-mcardle-calculator"
    ]
  },
  {
    "id": 97,
    "name": "Adjusted Body Weight",
    "slug": "adjusted-body-weight-calculator",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "IBW + 0.4 × (Actual - IBW)",
    "shortDesc": "Calculate Adjusted Body Weight (ABW) for accurate clinical dosing in obesity.",
    "seoTitle": "Adjusted Body Weight — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Adjusted Body Weight (IBW + 0.4 × (Actual - IBW)). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "IBW + 0.4 × (Actual - IBW)",
    "formulaExplanation": "The Adjusted Body Weight is powered by the IBW + 0.4 × (Actual - IBW) protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of adjusted body weight is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "weight",
        "label": "Actual Weight",
        "type": "number",
        "unit": "kg",
        "defaultValue": 95,
        "min": 30,
        "max": 300,
        "step": 0.5
      },
      {
        "id": "height",
        "label": "Height",
        "type": "number",
        "unit": "cm",
        "defaultValue": 170,
        "min": 100,
        "max": 250,
        "step": 1
      },
      {
        "id": "gender",
        "label": "Biological Sex",
        "type": "select",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          }
        ],
        "defaultValue": "male"
      }
    ],
    "faqs": [
      {
        "q": "What does the Adjusted Body Weight measure?",
        "a": "The Adjusted Body Weight calculates your calculate adjusted body weight (abw) for accurate clinical dosing in obesity.. It applies validated clinical formulas (IBW + 0.4 × (Actual - IBW)) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Adjusted Body Weight?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Adjusted Body Weight?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "mifflin-st-jeor-calculator",
      "katch-mcardle-calculator"
    ]
  },
  {
    "id": 98,
    "name": "kcal to kJ Converter",
    "slug": "kcal-to-kj-converter",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "Bidirectional kcal ↔ kJ",
    "shortDesc": "Convert between kilocalories and kilojoules with scientific precision.",
    "seoTitle": "kcal to kJ Converter — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free kcal to kJ Converter (Bidirectional kcal ↔ kJ). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "Bidirectional kcal ↔ kJ",
    "formulaExplanation": "The kcal to kJ Converter is powered by the Bidirectional kcal ↔ kJ protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of kcal to kj converter is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "inputValue",
        "label": "Energy Value",
        "type": "number",
        "unit": "",
        "defaultValue": 500,
        "min": 0,
        "max": 50000,
        "step": 10
      },
      {
        "id": "conversionType",
        "label": "Conversion Direction",
        "type": "select",
        "options": [
          {
            "label": "Kilocalories (kcal) ➔ Kilojoules (kJ)",
            "value": "kcalToKj"
          },
          {
            "label": "Kilojoules (kJ) ➔ Kilocalories (kcal)",
            "value": "kjToKcal"
          }
        ],
        "defaultValue": "kcalToKj"
      }
    ],
    "faqs": [
      {
        "q": "What does the kcal to kJ Converter measure?",
        "a": "The kcal to kJ Converter calculates your convert between kilocalories and kilojoules with scientific precision.. It applies validated clinical formulas (Bidirectional kcal ↔ kJ) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this kcal to kJ Converter?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the kcal to kJ Converter?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "mifflin-st-jeor-calculator",
      "katch-mcardle-calculator"
    ]
  },
  {
    "id": 99,
    "name": "mg to mcg Converter",
    "slug": "mg-to-mcg-converter",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "1 mg = 1000 mcg",
    "shortDesc": "Convert clinical micronutrient doses between milligrams and micrograms.",
    "seoTitle": "mg to mcg Converter — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free mg to mcg Converter (1 mg = 1000 mcg). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "1 mg = 1000 mcg",
    "formulaExplanation": "The mg to mcg Converter is powered by the 1 mg = 1000 mcg protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of mg to mcg converter is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "inputValue",
        "label": "Value",
        "type": "number",
        "unit": "",
        "defaultValue": 5,
        "min": 0,
        "max": 100000,
        "step": 0.1
      },
      {
        "id": "conversionType",
        "label": "Conversion Direction",
        "type": "select",
        "options": [
          {
            "label": "Milligram (mg) ➔ Microgram (mcg)",
            "value": "mgToMcg"
          },
          {
            "label": "Microgram (mcg) ➔ Milligram (mg)",
            "value": "mcgToMg"
          }
        ],
        "defaultValue": "mgToMcg"
      }
    ],
    "faqs": [
      {
        "q": "What does the mg to mcg Converter measure?",
        "a": "The mg to mcg Converter calculates your convert clinical micronutrient doses between milligrams and micrograms.. It applies validated clinical formulas (1 mg = 1000 mcg) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this mg to mcg Converter?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the mg to mcg Converter?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "mifflin-st-jeor-calculator",
      "katch-mcardle-calculator"
    ]
  },
  {
    "id": 100,
    "name": "Nutrition Percentage Calculator",
    "slug": "nutrition-percentage-calculator",
    "category": "professional-dietitian",
    "categoryName": "Professional Dietitian Tools",
    "categoryIcon": "GraduationCap",
    "themeColor": "#92400e",
    "themeBg": "#fef3c7",
    "calculation": "(Nutrient / Daily Value) × 100",
    "shortDesc": "Calculate percentage contribution of any meal or nutrient toward Daily Value (% DV).",
    "seoTitle": "Nutrition Percentage Calculator — Accurate Free Nutrition & Diet Calculator | DietNexa",
    "seoDescription": "Use DietNexa's free Nutrition Percentage Calculator ((Nutrient / Daily Value) × 100). Instant accurate calculation, clinical interpretation, dietary guidelines, and dietitian advice for optimal wellness.",
    "formula": "(Nutrient / Daily Value) × 100",
    "formulaExplanation": "The Nutrition Percentage Calculator is powered by the (Nutrient / Daily Value) × 100 protocol. In clinical dietetics, this formula assesses metabolic status, energy expenditure, or nutrient distribution based on individual physiological markers such as weight, height, age, and activity.",
    "clinicalImportance": "Accurate calculation of nutrition percentage calculator is fundamental for designing personalized medical nutrition therapies, managing body weight sustainably, and preventing chronic metabolic syndrome or lifestyle disorders.",
    "inputsConfig": [
      {
        "id": "nutrientAmount",
        "label": "Current Amount Consumed",
        "type": "number",
        "unit": "",
        "defaultValue": 45,
        "min": 0,
        "max": 50000,
        "step": 1
      },
      {
        "id": "dailyValue",
        "label": "Standard Daily Recommended Value",
        "type": "number",
        "unit": "",
        "defaultValue": 90,
        "min": 1,
        "max": 50000,
        "step": 1
      }
    ],
    "faqs": [
      {
        "q": "What does the Nutrition Percentage Calculator measure?",
        "a": "The Nutrition Percentage Calculator calculates your calculate percentage contribution of any meal or nutrient toward daily value (% dv).. It applies validated clinical formulas ((Nutrient / Daily Value) × 100) to help individuals and dietitians optimize nutrition and body composition."
      },
      {
        "q": "How accurate is this Nutrition Percentage Calculator?",
        "a": "This tool uses standard evidence-based equations recognized by international health organizations (WHO, ADA, ICMR). For clinical diagnosis or personalized medical nutrition therapy, consult our certified DietNexa clinical nutritionists."
      },
      {
        "q": "How often should I use the Nutrition Percentage Calculator?",
        "a": "We recommend checking this metric periodically (every 2 to 4 weeks for body composition and weight management, or daily for meal planning and hydration tracking) to stay on course with your health milestones."
      }
    ],
    "relatedSlugs": [
      "harris-benedict-calculator",
      "mifflin-st-jeor-calculator",
      "katch-mcardle-calculator"
    ]
  }
];

export function getAllTools() {
  return toolsData;
}

export function getToolBySlug(slug) {
  return toolsData.find((t) => t.slug === slug);
}

export function getToolsByCategory(catId) {
  return toolsData.filter((t) => t.category === catId);
}

export function getAllToolSlugs() {
  return toolsData.map((t) => t.slug);
}
