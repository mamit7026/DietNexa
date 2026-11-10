// src/lib/calculatorEngine.js
// Scientific calculations for all 100 DietNexa nutrition tools

export function calculateTool(slug, inputs = {}) {
  const num = (val, fallback = 0) => {
    const n = Number(val);
    return isNaN(n) ? fallback : n;
  };

  const weight = num(inputs.weight, 70);
  const height = num(inputs.height, 170);
  const age = num(inputs.age, 28);
  const gender = inputs.gender || "male";
  const activity = inputs.activity || "moderate";

  // Common BMR calculation (Mifflin-St Jeor)
  const calcBMR = (w, h, a, g) => {
    if (g === "female") {
      return 10 * w + 6.25 * h - 5 * a - 161;
    }
    return 10 * w + 6.25 * h - 5 * a + 5;
  };

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };

  switch (slug) {
    // ─── Category 1: Body Measurement & BMI ─────────────────────────────────
    case "bmi-calculator": {
      const hM = height / 100;
      const bmi = weight / (hM * hM);
      let status = "Normal Weight";
      let color = "emerald";
      let interpretation = "Your BMI is within the healthy standard range (18.5 – 24.9). Keep up balanced nutrition and routine physical activity.";
      if (bmi < 18.5) {
        status = "Underweight";
        color = "amber";
        interpretation = "Your BMI is below 18.5, indicating you may be underweight. Consider nutrient-dense wholesome meals to reach a healthy weight.";
      } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
        color = "amber";
        interpretation = "Your BMI is slightly elevated. A mild caloric deficit and structured lifestyle changes can help restore optimal metabolic balance.";
      } else if (bmi >= 30) {
        status = "Obese";
        color = "rose";
        interpretation = "Your BMI indicates obesity. Personalized dietary intervention is recommended to manage metabolic and cardiovascular risks.";
      }
      const minHealthy = (18.5 * hM * hM).toFixed(1);
      const maxHealthy = (24.9 * hM * hM).toFixed(1);

      return {
        primaryValue: bmi.toFixed(1),
        primaryUnit: "kg/m²",
        statusBadge: status,
        statusColor: color,
        interpretation,
        breakdown: [
          { label: "Healthy Weight Range", value: `${minHealthy} – ${maxHealthy}`, unit: "kg" },
          { label: "WHO Category", value: status, unit: "" },
          { label: "Height Assessed", value: height.toString(), unit: "cm" },
        ],
        formulaUsed: "BMI = Weight (kg) / [Height (m)]²",
      };
    }

    case "ideal-body-weight-calculator":
    case "ibw-devine-calculator": {
      const inchesOver5Ft = Math.max(0, (height / 2.54) - 60);
      let ibw = gender === "female" ? 45.5 + 2.3 * inchesOver5Ft : 50.0 + 2.3 * inchesOver5Ft;
      if (height < 152.4) ibw = gender === "female" ? 45.5 : 50.0;
      const lower = (ibw * 0.9).toFixed(1);
      const upper = (ibw * 1.1).toFixed(1);
      return {
        primaryValue: ibw.toFixed(1),
        primaryUnit: "kg",
        statusBadge: "Ideal Clinical Target",
        statusColor: "emerald",
        interpretation: `Based on the Devine clinical standard, your ideal body weight is approx ${ibw.toFixed(1)} kg. A healthy tolerance buffer is between ${lower} kg and ${upper} kg.`,
        breakdown: [
          { label: "Devine Formula IBW", value: ibw.toFixed(1), unit: "kg" },
          { label: "Healthy Buffer (±10%)", value: `${lower} – ${upper}`, unit: "kg" },
          { label: "Reference Standard", value: "Devine (1974)", unit: "" },
        ],
        formulaUsed: gender === "female" ? "IBW = 45.5 kg + 2.3 kg per inch over 5 feet" : "IBW = 50.0 kg + 2.3 kg per inch over 5 feet",
      };
    }

    case "healthy-weight-range-calculator": {
      const hM = height / 100;
      const minW = (18.5 * hM * hM).toFixed(1);
      const maxW = (24.9 * hM * hM).toFixed(1);
      const midW = (21.7 * hM * hM).toFixed(1);
      return {
        primaryValue: `${minW} – ${maxW}`,
        primaryUnit: "kg",
        statusBadge: "WHO Normal Weight Range",
        statusColor: "emerald",
        interpretation: `For a height of ${height} cm, maintaining a body weight between ${minW} kg and ${maxW} kg ensures minimal risk of chronic cardiovascular and metabolic diseases.`,
        breakdown: [
          { label: "Lower Healthy Limit (BMI 18.5)", value: minW, unit: "kg" },
          { label: "Optimal Midpoint (BMI 21.7)", value: midW, unit: "kg" },
          { label: "Upper Healthy Limit (BMI 24.9)", value: maxW, unit: "kg" },
        ],
        formulaUsed: "Healthy Range = [18.5 to 24.9] × [Height in meters]²",
      };
    }

    case "body-fat-percentage-calculator": {
      const hM = height / 100;
      const bmi = weight / (hM * hM);
      const sexVal = gender === "female" ? 0 : 1;
      const bf = 1.20 * bmi + 0.23 * age - 10.8 * sexVal - 5.4;
      const cleanBf = Math.max(4, Math.min(65, bf));
      let status = "Normal Fitness";
      let color = "emerald";
      if (gender === "male") {
        if (cleanBf < 10) status = "Essential Fat / Athletic";
        else if (cleanBf > 25) { status = "High Body Fat"; color = "amber"; }
      } else {
        if (cleanBf < 18) status = "Athletic / Low";
        else if (cleanBf > 32) { status = "High Body Fat"; color = "amber"; }
      }
      return {
        primaryValue: cleanBf.toFixed(1),
        primaryUnit: "%",
        statusBadge: status,
        statusColor: color,
        interpretation: `Your estimated body fat percentage is ${cleanBf.toFixed(1)}%. Body composition provides a much deeper health metric than scale weight alone.`,
        breakdown: [
          { label: "Estimated Fat Percentage", value: cleanBf.toFixed(1), unit: "%" },
          { label: "Approximate Fat Mass", value: (weight * (cleanBf / 100)).toFixed(1), unit: "kg" },
          { label: "Approximate Lean Mass", value: (weight * (1 - cleanBf / 100)).toFixed(1), unit: "kg" },
        ],
        formulaUsed: "Deurenberg: 1.20 × BMI + 0.23 × Age - 10.8 × Sex - 5.4",
      };
    }

    case "lean-body-mass-calculator": {
      let lbm = 0;
      if (gender === "female") {
        lbm = 0.252 * weight + 0.473 * height - 48.3;
      } else {
        lbm = 0.407 * weight + 0.267 * height - 19.2;
      }
      lbm = Math.max(15, lbm);
      const fatMass = Math.max(0, weight - lbm);
      return {
        primaryValue: lbm.toFixed(1),
        primaryUnit: "kg",
        statusBadge: "Metabolically Active Mass",
        statusColor: "emerald",
        interpretation: `You have approximately ${lbm.toFixed(1)} kg of lean muscle, bone, and organ mass. Maintaining lean mass is vital for insulin sensitivity and high metabolic rate.`,
        breakdown: [
          { label: "Lean Body Mass (Boer)", value: lbm.toFixed(1), unit: "kg" },
          { label: "Estimated Fat Mass", value: fatMass.toFixed(1), unit: "kg" },
          { label: "Lean Mass Percentage", value: ((lbm / weight) * 100).toFixed(1), unit: "%" },
        ],
        formulaUsed: gender === "female" ? "Boer Formula: 0.252 × Weight + 0.473 × Height - 48.3" : "Boer Formula: 0.407 × Weight + 0.267 × Height - 19.2",
      };
    }

    case "fat-mass-calculator": {
      const bfPct = num(inputs.bodyFat, 22);
      const fatKg = weight * (bfPct / 100);
      const leanKg = weight - fatKg;
      return {
        primaryValue: fatKg.toFixed(1),
        primaryUnit: "kg",
        statusBadge: "Total Adipose Mass",
        statusColor: "emerald",
        interpretation: `At ${bfPct}% body fat on a ${weight} kg frame, your body contains approximately ${fatKg.toFixed(1)} kg of adipose tissue.`,
        breakdown: [
          { label: "Fat Mass", value: fatKg.toFixed(1), unit: "kg" },
          { label: "Lean Tissue Mass", value: leanKg.toFixed(1), unit: "kg" },
          { label: "Body Fat Input", value: bfPct.toString(), unit: "%" },
        ],
        formulaUsed: "Fat Mass (kg) = Total Weight × (Body Fat % / 100)",
      };
    }

    case "waist-to-height-ratio-calculator": {
      const waist = num(inputs.waist, 82);
      const ratio = waist / height;
      let status = "Healthy Central Adiposity";
      let color = "emerald";
      let interp = "Your waist circumference is well below half your height (< 0.50), reflecting low visceral fat and low cardiovascular hazard.";
      if (ratio >= 0.50 && ratio < 0.60) {
        status = "Increased Cardiometabolic Risk";
        color = "amber";
        interp = "Your waist exceeds 50% of your height. Modest waistline reduction will significantly decrease metabolic syndrome risk.";
      } else if (ratio >= 0.60) {
        status = "High Central Obesity Risk";
        color = "rose";
        interp = "Waist-to-height ratio is above 0.60, indicating significant central visceral fat deposition.";
      }
      return {
        primaryValue: ratio.toFixed(2),
        primaryUnit: "ratio",
        statusBadge: status,
        statusColor: color,
        interpretation: interp,
        breakdown: [
          { label: "Calculated Ratio", value: ratio.toFixed(2), unit: "" },
          { label: "Ideal Clinical Threshold", value: "< 0.50", unit: "" },
          { label: "Target Waist Cut-off", value: (height * 0.5).toFixed(1), unit: "cm" },
        ],
        formulaUsed: "WHtR = Waist Circumference (cm) / Height (cm)",
      };
    }

    case "waist-to-hip-ratio-calculator": {
      const waist = num(inputs.waist, 82);
      const hip = num(inputs.hip, 96);
      const whr = waist / Math.max(1, hip);
      const threshold = gender === "female" ? 0.85 : 0.90;
      const isHigh = whr > threshold;
      return {
        primaryValue: whr.toFixed(2),
        primaryUnit: "ratio",
        statusBadge: isHigh ? "Android (Abdominal) Fat Distribution" : "Gynoid / Low Risk Profile",
        statusColor: isHigh ? "amber" : "emerald",
        interpretation: isHigh
          ? `Your WHR of ${whr.toFixed(2)} is above the ${threshold} cutoff for ${gender}s, suggesting android fat concentration around the abdomen.`
          : `Your WHR of ${whr.toFixed(2)} is within the safe parameters for ${gender}s (below ${threshold}).`,
        breakdown: [
          { label: "Calculated WHR", value: whr.toFixed(2), unit: "" },
          { label: "WHO Threshold", value: `< ${threshold}`, unit: "" },
          { label: "Distribution Profile", value: isHigh ? "Apple Shape" : "Pear / Balanced", unit: "" },
        ],
        formulaUsed: "WHR = Waist Circumference (cm) / Hip Circumference (cm)",
      };
    }

    case "bmr-calculator":
    case "mifflin-st-jeor-calculator": {
      const bmr = calcBMR(weight, height, age, gender);
      return {
        primaryValue: Math.round(bmr).toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Basal Caloric Burn",
        statusColor: "emerald",
        interpretation: `Your body burns approximately ${Math.round(bmr)} calories in 24 hours purely to keep your vital organs functioning at complete bed rest.`,
        breakdown: [
          { label: "Basal Metabolic Rate (BMR)", value: Math.round(bmr).toString(), unit: "kcal/day" },
          { label: "Hourly Resting Burn", value: (bmr / 24).toFixed(1), unit: "kcal/hr" },
          { label: "Equation Used", value: "Mifflin-St Jeor (1990)", unit: "" },
        ],
        formulaUsed: gender === "female" ? "10×Weight + 6.25×Height - 5×Age - 161" : "10×Weight + 6.25×Height - 5×Age + 5",
      };
    }

    case "body-surface-area-calculator": {
      const bsa = Math.sqrt((height * weight) / 3600);
      return {
        primaryValue: bsa.toFixed(2),
        primaryUnit: "m²",
        statusBadge: "Normal Adult Range",
        statusColor: "emerald",
        interpretation: `Your calculated body surface area is ${bsa.toFixed(2)} m² (average adult standard is ~1.7 to 1.9 m²).`,
        breakdown: [
          { label: "Mosteller BSA", value: bsa.toFixed(2), unit: "m²" },
          { label: "Average Adult Ref", value: "1.73", unit: "m²" },
        ],
        formulaUsed: "Mosteller: BSA (m²) = √([Height (cm) × Weight (kg)] / 3600)",
      };
    }

    // ─── Category 2: Calories & Energy ──────────────────────────────────────
    case "daily-calorie-calculator":
    case "tdee-calculator":
    case "maintenance-calories-calculator": {
      const bmr = calcBMR(weight, height, age, gender);
      const mult = activityMultipliers[activity] || 1.55;
      const tdee = Math.round(bmr * mult);
      return {
        primaryValue: tdee.toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Maintenance Energy Target",
        statusColor: "emerald",
        interpretation: `To maintain your current weight at your selected activity level (${activity}), you should consume approximately ${tdee} calories each day.`,
        breakdown: [
          { label: "Daily Maintenance (TDEE)", value: tdee.toString(), unit: "kcal/day" },
          { label: "Base Metabolism (BMR)", value: Math.round(bmr).toString(), unit: "kcal/day" },
          { label: "Activity Expenditure", value: Math.round(tdee - bmr).toString(), unit: "kcal/day" },
          { label: "Weekly Caloric Budget", value: (tdee * 7).toLocaleString(), unit: "kcal/wk" },
        ],
        formulaUsed: "TDEE = BMR × Activity Multiplier (Mifflin-St Jeor)",
      };
    }

    case "weight-loss-calories-calculator": {
      const bmr = calcBMR(weight, height, age, gender);
      const mult = activityMultipliers[activity] || 1.55;
      const tdee = Math.round(bmr * mult);
      const deficit = num(inputs.deficitPace, 500);
      const targetCalories = Math.max(1200, tdee - deficit);
      const weeklyLossKg = (deficit * 7) / 7700;
      return {
        primaryValue: targetCalories.toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Fat Loss Calorie Target",
        statusColor: "emerald",
        interpretation: `Consuming ${targetCalories} kcal/day creates a sustained ${deficit} kcal daily deficit, yielding approx ${weeklyLossKg.toFixed(2)} kg of fat loss per week.`,
        breakdown: [
          { label: "Target Intake", value: targetCalories.toString(), unit: "kcal/day" },
          { label: "Daily Energy Deficit", value: deficit.toString(), unit: "kcal/day" },
          { label: "Projected Weekly Loss", value: weeklyLossKg.toFixed(2), unit: "kg/week" },
          { label: "Estimated Monthly Loss", value: (weeklyLossKg * 4.3).toFixed(1), unit: "kg/month" },
        ],
        formulaUsed: "Target Calories = TDEE - Target Deficit",
      };
    }

    case "weight-gain-calories-calculator": {
      const bmr = calcBMR(weight, height, age, gender);
      const mult = activityMultipliers[activity] || 1.55;
      const tdee = Math.round(bmr * mult);
      const surplus = num(inputs.surplusPace, 350);
      const targetCalories = tdee + surplus;
      const weeklyGainKg = (surplus * 7) / 7700;
      return {
        primaryValue: targetCalories.toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Lean Muscle Hypertrophy Target",
        statusColor: "emerald",
        interpretation: `Eating ${targetCalories} calories per day provides a clean ${surplus} kcal surplus to stimulate protein synthesis with minimal unwanted adipose storage.`,
        breakdown: [
          { label: "Target Daily Intake", value: targetCalories.toString(), unit: "kcal/day" },
          { label: "Calorie Surplus", value: surplus.toString(), unit: "kcal/day" },
          { label: "Projected Weekly Gain", value: weeklyGainKg.toFixed(2), unit: "kg/week" },
          { label: "Projected Monthly Gain", value: (weeklyGainKg * 4.3).toFixed(1), unit: "kg/month" },
        ],
        formulaUsed: "Target Calories = TDEE + Lean Hypertrophy Surplus",
      };
    }

    case "calorie-deficit-calculator": {
      const tdee = num(inputs.dailyIntake, 2400);
      const deficit = num(inputs.deficit, 500);
      const target = Math.max(1000, tdee - deficit);
      const monthlyKg = (deficit * 30) / 7700;
      return {
        primaryValue: target.toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Calorie Deficit Target",
        statusColor: "emerald",
        interpretation: `A ${deficit} kcal deficit brings your intake down from ${tdee} to ${target} kcal/day, driving ~ ${monthlyKg.toFixed(2)} kg weight loss each month.`,
        breakdown: [
          { label: "Target Intake", value: target.toString(), unit: "kcal/day" },
          { label: "Weekly Calorie Deficit", value: (deficit * 7).toLocaleString(), unit: "kcal/week" },
          { label: "Monthly Fat Equivalent", value: monthlyKg.toFixed(2), unit: "kg/month" },
        ],
        formulaUsed: "Intake Target = Maintenance (TDEE) - Deficit",
      };
    }

    case "calorie-surplus-calculator": {
      const maint = num(inputs.maintenance, 2200);
      const surplus = num(inputs.surplus, 400);
      const target = maint + surplus;
      return {
        primaryValue: target.toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Hypertrophy Surplus Target",
        statusColor: "emerald",
        interpretation: `Consuming ${target} kcal daily (${surplus} kcal surplus above ${maint} maintenance) optimizes muscular growth without excess fat accumulation.`,
        breakdown: [
          { label: "Target Calories", value: target.toString(), unit: "kcal/day" },
          { label: "Weekly Surplus", value: (surplus * 7).toLocaleString(), unit: "kcal/week" },
          { label: "Expected Weekly Gain", value: ((surplus * 7) / 7700).toFixed(2), unit: "kg/week" },
        ],
        formulaUsed: "Target Calories = Maintenance Calories + Surplus",
      };
    }

    case "resting-energy-calculator": {
      const bmr = calcBMR(weight, height, age, gender);
      return {
        primaryValue: Math.round(bmr).toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Resting Metabolic Burn",
        statusColor: "emerald",
        interpretation: `Your baseline Resting Energy Expenditure (REE) is ${Math.round(bmr)} kcal/day, burning approx ${(bmr / 24).toFixed(1)} calories each hour.`,
        breakdown: [
          { label: "24-Hour REE", value: Math.round(bmr).toString(), unit: "kcal" },
          { label: "Hourly Resting Burn", value: (bmr / 24).toFixed(1), unit: "kcal/hr" },
        ],
        formulaUsed: "REE (kcal/day) = 10×Weight + 6.25×Height - 5×Age ± Sex Factor",
      };
    }

    case "activity-calorie-calculator":
    case "exercise-calorie-calculator": {
      const met = num(inputs.activityType, 6.8);
      const duration = num(inputs.duration, 45);
      const caloriesBurned = Math.round((met * 3.5 * weight / 200) * duration);
      return {
        primaryValue: caloriesBurned.toString(),
        primaryUnit: "kcal",
        statusBadge: "Workout Calorie Burn",
        statusColor: "emerald",
        interpretation: `During this ${duration}-minute session, you expended approximately ${caloriesBurned} calories based on standard metabolic equivalent (MET ${met}).`,
        breakdown: [
          { label: "Total Calories Burned", value: caloriesBurned.toString(), unit: "kcal" },
          { label: "Burn Rate", value: (caloriesBurned / duration).toFixed(1), unit: "kcal/min" },
          { label: "MET Multiplier", value: met.toString(), unit: "" },
        ],
        formulaUsed: "Burn (kcal) = (MET × 3.5 × Weight in kg / 200) × Duration (mins)",
      };
    }

    // ─── Category 3: Macronutrients ─────────────────────────────────────────
    case "protein-calculator":
    case "vegetarian-protein-calculator": {
      const goal = inputs.goal || "moderate";
      let mult = 1.3;
      if (goal === "baseline") mult = 0.9;
      else if (goal === "fatloss") mult = 1.7;
      else if (goal === "muscle") mult = 2.1;
      const grams = Math.round(weight * mult);
      const cals = grams * 4;
      return {
        primaryValue: grams.toString(),
        primaryUnit: "g/day",
        statusBadge: "Personalized Protein Target",
        statusColor: "emerald",
        interpretation: `To support your goal (${goal}) at ${weight} kg body weight, aim for ${grams} grams of high biological value protein daily (${mult} g/kg).`,
        breakdown: [
          { label: "Daily Protein Target", value: grams.toString(), unit: "grams/day" },
          { label: "Caloric Equiv (4 kcal/g)", value: cals.toString(), unit: "kcal" },
          { label: "Protein Ratio", value: mult.toString(), unit: "g/kg body weight" },
          { label: "Per Meal (4 meals)", value: Math.round(grams / 4).toString(), unit: "g/meal" },
        ],
        formulaUsed: "Protein (g) = Body Weight (kg) × Factor (0.9 to 2.2 g/kg)",
      };
    }

    case "carbohydrate-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const carbPct = num(inputs.carbPct, 50);
      const carbCals = cals * (carbPct / 100);
      const carbGrams = Math.round(carbCals / 4);
      return {
        primaryValue: carbGrams.toString(),
        primaryUnit: "g/day",
        statusBadge: "Daily Carbohydrate Target",
        statusColor: "emerald",
        interpretation: `Allocating ${carbPct}% of a ${cals} kcal diet gives ${carbGrams} grams of carbohydrates daily for optimal glycogen replenishment and stamina.`,
        breakdown: [
          { label: "Target Carbs", value: carbGrams.toString(), unit: "grams" },
          { label: "Carb Calories", value: Math.round(carbCals).toString(), unit: "kcal" },
          { label: "Energy Share", value: carbPct.toString(), unit: "% of total calories" },
        ],
        formulaUsed: "Carbs (g) = (Total Calories × Carb %) / 4 kcal per gram",
      };
    }

    case "fat-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const fatPct = num(inputs.fatPct, 25);
      const fatCals = cals * (fatPct / 100);
      const fatGrams = Math.round(fatCals / 9);
      return {
        primaryValue: fatGrams.toString(),
        primaryUnit: "g/day",
        statusBadge: "Healthy Dietary Fat Target",
        statusColor: "emerald",
        interpretation: `Targeting ${fatPct}% of energy from fats yields ${fatGrams} grams daily, supporting endocrine hormone synthesis and fat-soluble vitamin absorption.`,
        breakdown: [
          { label: "Target Dietary Fat", value: fatGrams.toString(), unit: "grams" },
          { label: "Fat Calories", value: Math.round(fatCals).toString(), unit: "kcal" },
          { label: "Energy Share", value: fatPct.toString(), unit: "%" },
        ],
        formulaUsed: "Fat (g) = (Total Calories × Fat %) / 9 kcal per gram",
      };
    }

    case "fiber-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const targetFiber = Math.round((cals / 1000) * 14);
      return {
        primaryValue: targetFiber.toString(),
        primaryUnit: "g/day",
        statusBadge: "Optimal Dietary Fiber",
        statusColor: "emerald",
        interpretation: `Based on clinical guidelines (14g per 1000 kcal), you should consume at least ${targetFiber} grams of dietary fiber daily for digestive and cardiovascular health.`,
        breakdown: [
          { label: "Daily Fiber Goal", value: targetFiber.toString(), unit: "grams" },
          { label: "Clinical Standard", value: "14g per 1000 kcal", unit: "" },
        ],
        formulaUsed: "Fiber Goal = (Total Calories / 1000) × 14g",
      };
    }

    case "sugar-intake-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const maxSugarCals = cals * 0.05; // WHO strict <5%
      const maxGrams = Math.round(maxSugarCals / 4);
      return {
        primaryValue: maxGrams.toString(),
        primaryUnit: "g/day",
        statusBadge: "WHO Recommended Limit",
        statusColor: "amber",
        interpretation: `The World Health Organization strongly advises keeping free sugars below 5% of total energy—which is no more than ${maxGrams} grams (~5 teaspoons) per day.`,
        breakdown: [
          { label: "Strict Limit (<5%)", value: maxGrams.toString(), unit: "grams/day" },
          { label: "Upper Limit (<10%)", value: (maxGrams * 2).toString(), unit: "grams/day" },
          { label: "Teaspoon Equivalent", value: (maxGrams / 4).toFixed(1), unit: "tsp" },
        ],
        formulaUsed: "Max Sugar (g) = (Daily Calories × 0.05) / 4 kcal per gram",
      };
    }

    case "saturated-fat-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const ahaMaxGrams = Math.round((cals * 0.06) / 9); // AHA < 6%
      return {
        primaryValue: ahaMaxGrams.toString(),
        primaryUnit: "g/day",
        statusBadge: "Heart-Safe Ceiling",
        statusColor: "amber",
        interpretation: `The American Heart Association recommends limiting saturated fats to under 6% of daily energy (${ahaMaxGrams} grams) to safeguard LDL cholesterol levels.`,
        breakdown: [
          { label: "AHA Heart Target (<6%)", value: ahaMaxGrams.toString(), unit: "grams/day" },
          { label: "WHO General Cap (<10%)", value: Math.round((cals * 0.10) / 9).toString(), unit: "grams/day" },
        ],
        formulaUsed: "Saturated Fat Limit (g) = (Daily Calories × 0.06) / 9",
      };
    }

    case "unsaturated-fat-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const totalFatGrams = (cals * 0.25) / 9;
      const satGrams = (cals * 0.06) / 9;
      const healthyUnsat = Math.round(totalFatGrams - satGrams);
      return {
        primaryValue: healthyUnsat.toString(),
        primaryUnit: "g/day",
        statusBadge: "MUFA & PUFA Target",
        statusColor: "emerald",
        interpretation: `Aim for at least ${healthyUnsat} grams of unsaturated fats daily from olive oil, nuts, seeds, and fish to support cardiovascular wellness.`,
        breakdown: [
          { label: "Recommended Unsaturated", value: healthyUnsat.toString(), unit: "grams" },
          { label: "Suggested MUFA (Olive/Nuts)", value: Math.round(healthyUnsat * 0.6).toString(), unit: "grams" },
          { label: "Suggested PUFA (Omega 3/6)", value: Math.round(healthyUnsat * 0.4).toString(), unit: "grams" },
        ],
        formulaUsed: "Unsaturated Fat = Total Healthy Fat Target - Saturated Fat Cap",
      };
    }

    case "omega-3-calculator": {
      return {
        primaryValue: "1.6",
        primaryUnit: "g/day",
        statusBadge: "Essential Fatty Acid Target",
        statusColor: "emerald",
        interpretation: "Optimal intake for adults is 1.1–1.6 g of plant ALA plus 250–500 mg combined marine EPA + DHA daily.",
        breakdown: [
          { label: "Total ALA (Chia/Flax/Walnuts)", value: "1.6", unit: "grams" },
          { label: "Active EPA + DHA (Fish/Algae)", value: "250 – 500", unit: "mg" },
        ],
        formulaUsed: "National Academy of Medicine AI standards",
      };
    }

    case "omega-6-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const o6Grams = Math.round((cals * 0.07) / 9);
      return {
        primaryValue: o6Grams.toString(),
        primaryUnit: "g/day",
        statusBadge: "Linoleic Acid Goal",
        statusColor: "emerald",
        interpretation: `Recommended Omega-6 intake is approximately ${o6Grams} grams daily (5–10% of total energy). Focus on maintaining a balanced 1:4 Omega 3 to 6 ratio.`,
        breakdown: [
          { label: "Daily Linoleic Acid", value: o6Grams.toString(), unit: "grams" },
          { label: "Energy Share", value: "7%", unit: "" },
        ],
        formulaUsed: "Omega-6 (g) = (Daily Energy × 0.07) / 9",
      };
    }

    case "macro-split-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const cPct = num(inputs.carbPct, 50);
      const pPct = num(inputs.proteinPct, 25);
      const fPct = num(inputs.fatPct, 25);
      const cG = Math.round((cals * (cPct / 100)) / 4);
      const pG = Math.round((cals * (pPct / 100)) / 4);
      const fG = Math.round((cals * (fPct / 100)) / 9);
      return {
        primaryValue: `${pG}P / ${cG}C / ${fG}F`,
        primaryUnit: "grams",
        statusBadge: "Custom Macronutrient Split",
        statusColor: "emerald",
        interpretation: `On a ${cals} kcal budget, your ${pPct}/${cPct}/${fPct} split gives ${pG}g protein, ${cG}g carbohydrates, and ${fG}g dietary fat.`,
        breakdown: [
          { label: "Protein (4 kcal/g)", value: pG.toString(), unit: "grams" },
          { label: "Carbohydrates (4 kcal/g)", value: cG.toString(), unit: "grams" },
          { label: "Fats (9 kcal/g)", value: fG.toString(), unit: "grams" },
        ],
        formulaUsed: "Macros (g) = (Total Calories × Split %) / Nutrient Caloric Factor",
      };
    }

    // ─── Category 4: Water & Hydration ──────────────────────────────────────
    case "daily-water-calculator":
    case "hydration-requirement-calculator":
    case "water-intake-per-kg-calculator": {
      const climate = inputs.climate || "normal";
      const exerciseMins = num(inputs.exerciseMins, 30);
      let baselineMl = weight * 35;
      if (climate === "hot") baselineMl += 500;
      baselineMl += (exerciseMins / 30) * 350;
      const liters = (baselineMl / 1000).toFixed(1);
      const glasses = Math.round(baselineMl / 250);
      return {
        primaryValue: liters,
        primaryUnit: "liters/day",
        statusBadge: "Daily Hydration Target",
        statusColor: "emerald",
        interpretation: `For a ${weight} kg individual with ${exerciseMins} mins of physical activity, drink approx ${liters} liters (${glasses} glasses of 250ml) each day.`,
        breakdown: [
          { label: "Recommended Water", value: liters, unit: "L/day" },
          { label: "Standard 250ml Glasses", value: glasses.toString(), unit: "glasses" },
          { label: "Base Requirement (35ml/kg)", value: ((weight * 35) / 1000).toFixed(1), unit: "L" },
        ],
        formulaUsed: "Water (L) = (Weight × 35 ml + Exercise & Climate Additions) / 1000",
      };
    }

    case "exercise-hydration-calculator": {
      const durationMins = num(inputs.workoutDuration, 60);
      const intensityRate = num(inputs.intensity, 500); // ml per hour
      const totalMl = Math.round((durationMins / 60) * intensityRate);
      return {
        primaryValue: totalMl.toString(),
        primaryUnit: "ml",
        statusBadge: "Workout Rehydration Target",
        statusColor: "emerald",
        interpretation: `Consume ${totalMl} ml of fluids (approx ${Math.round(totalMl / (durationMins / 15 || 1))} ml every 15–20 minutes) during your workout.`,
        breakdown: [
          { label: "Total Session Fluid", value: totalMl.toString(), unit: "ml" },
          { label: "Pace per 20 mins", value: Math.round(totalMl / (durationMins / 20 || 1)).toString(), unit: "ml" },
        ],
        formulaUsed: "Fluid (ml) = Workout Duration (hrs) × Hourly Sweat Rate (500–1000 ml/hr)",
      };
    }

    case "sweat-loss-calculator": {
      const pre = num(inputs.preWeight, 72.5);
      const post = num(inputs.postWeight, 71.8);
      const fluidIn = num(inputs.fluidDrank, 500);
      const dur = num(inputs.duration, 60);
      const weightDeltaKg = pre - post;
      const sweatLossMl = Math.round((weightDeltaKg * 1000) + fluidIn);
      const hourlyRate = Math.round(sweatLossMl / (dur / 60));
      return {
        primaryValue: hourlyRate.toString(),
        primaryUnit: "ml/hour",
        statusBadge: "Sweat Rate per Hour",
        statusColor: "emerald",
        interpretation: `Your calculated sweat rate is ${hourlyRate} ml/hour. Replace 125% to 150% of this total sweat deficit (${Math.round(sweatLossMl * 1.3)} ml) across post-workout recovery.`,
        breakdown: [
          { label: "Total Sweat Lost", value: sweatLossMl.toString(), unit: "ml" },
          { label: "Hourly Sweat Rate", value: hourlyRate.toString(), unit: "ml/hr" },
          { label: "Recommended Rehydration (125%)", value: Math.round(sweatLossMl * 1.25).toString(), unit: "ml" },
        ],
        formulaUsed: "Sweat Rate = [(Pre Wt - Post Wt) in kg × 1000 + Fluid Drank in ml] / Duration (hrs)",
      };
    }

    case "dehydration-percentage-calculator": {
      const pre = num(inputs.preWeight, 72.5);
      const post = num(inputs.postWeight, 71.8);
      const pct = Math.max(0, ((pre - post) / pre) * 100);
      let status = "Mild / Normal (Minimal Performance Impact)";
      let color = "emerald";
      if (pct >= 2.0 && pct < 4.0) {
        status = "Moderate Dehydration (Aerobic Performance Drops)";
        color = "amber";
      } else if (pct >= 4.0) {
        status = "Severe Dehydration (Cramping & Heat Exhaustion Risk)";
        color = "rose";
      }
      return {
        primaryValue: pct.toFixed(1),
        primaryUnit: "% body weight",
        statusBadge: status,
        statusColor: color,
        interpretation: `You lost ${pct.toFixed(1)}% of body mass during training. Losses exceeding 2% impair endurance, cognition, and thermoregulation.`,
        breakdown: [
          { label: "Weight Dropped", value: (pre - post).toFixed(2), unit: "kg" },
          { label: "Dehydration Level", value: pct.toFixed(1), unit: "%" },
          { label: "Threshold for Impairment", value: "2.0", unit: "%" },
        ],
        formulaUsed: "Dehydration % = [(Pre-Exercise Wt - Post-Exercise Wt) / Pre-Exercise Wt] × 100",
      };
    }

    case "electrolyte-requirement-calculator":
    case "sodium-intake-calculator":
    case "potassium-intake-calculator": {
      const sweat = inputs.sweatLevel || "moderate";
      let sodiumMg = 2000;
      let potassiumMg = 3500;
      let magnesiumMg = 350;
      if (sweat === "heavy") {
        sodiumMg = 2800;
        potassiumMg = 4200;
        magnesiumMg = 450;
      }
      return {
        primaryValue: `${sodiumMg} Na / ${potassiumMg} K`,
        primaryUnit: "mg/day",
        statusBadge: "Electrolyte Balance Target",
        statusColor: "emerald",
        interpretation: `Daily target: ${sodiumMg} mg Sodium, ${potassiumMg} mg Potassium, and ${magnesiumMg} mg Magnesium to maintain normal neuromuscular conduction.`,
        breakdown: [
          { label: "Sodium (Na) Cap", value: sodiumMg.toString(), unit: "mg/day" },
          { label: "Potassium (K) Target", value: potassiumMg.toString(), unit: "mg/day" },
          { label: "Magnesium (Mg)", value: magnesiumMg.toString(), unit: "mg/day" },
        ],
        formulaUsed: "Clinical Electrolyte Reference Values (ICMR / AHA)",
      };
    }

    case "fluid-balance-calculator": {
      const fIn = num(inputs.fluidIn, 2400);
      const uOut = num(inputs.urineOut, 1600);
      const iLoss = num(inputs.insensibleLoss, 700);
      const net = fIn - (uOut + iLoss);
      return {
        primaryValue: (net > 0 ? `+${net}` : net.toString()),
        primaryUnit: "ml/day",
        statusBadge: Math.abs(net) < 300 ? "Euvolemic (Balanced)" : (net > 0 ? "Positive Fluid Balance" : "Negative Fluid Balance"),
        statusColor: Math.abs(net) < 300 ? "emerald" : "amber",
        interpretation: `24-hour net fluid balance is ${net} ml. A balanced state maintains steady hydration without edema or hypovolemia.`,
        breakdown: [
          { label: "Total Fluid In", value: fIn.toString(), unit: "ml" },
          { label: "Total Fluid Out", value: (uOut + iLoss).toString(), unit: "ml" },
          { label: "Net Balance", value: net.toString(), unit: "ml" },
        ],
        formulaUsed: "Net Balance = Fluid In - (Urine Out + Insensible Losses)",
      };
    }

    // ─── Category 5: Diet Planning ──────────────────────────────────────────
    case "meal-calorie-split-calculator":
    case "meal-macro-split-calculator": {
      const cals = num(inputs.dailyCalories, 2100);
      const count = num(inputs.mealsCount, 4);
      let b = 0, l = 0, d = 0, s1 = 0, s2 = 0;
      if (count === 3) {
        b = Math.round(cals * 0.30);
        l = Math.round(cals * 0.40);
        d = Math.round(cals * 0.30);
      } else if (count === 4) {
        b = Math.round(cals * 0.25);
        l = Math.round(cals * 0.35);
        s1 = Math.round(cals * 0.15);
        d = Math.round(cals * 0.25);
      } else {
        b = Math.round(cals * 0.25);
        s1 = Math.round(cals * 0.10);
        l = Math.round(cals * 0.30);
        s2 = Math.round(cals * 0.10);
        d = Math.round(cals * 0.25);
      }
      return {
        primaryValue: `${count} Meals Plan`,
        primaryUnit: "",
        statusBadge: "Balanced Energy Allocation",
        statusColor: "emerald",
        interpretation: `Distribute ${cals} calories across ${count} meals to avoid insulin surges and sustain constant satiety throughout the day.`,
        breakdown: [
          { label: "Breakfast", value: b.toString(), unit: "kcal" },
          { label: "Lunch", value: l.toString(), unit: "kcal" },
          { label: "Dinner", value: d.toString(), unit: "kcal" },
          ...(s1 ? [{ label: "Snack 1", value: s1.toString(), unit: "kcal" }] : []),
          ...(s2 ? [{ label: "Snack 2", value: s2.toString(), unit: "kcal" }] : []),
        ],
        formulaUsed: "Energy Partitioning: Breakfast (25%), Lunch (35%), Dinner (25%), Snacks (15%)",
      };
    }

    case "breakfast-calorie-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const target = Math.round(cals * 0.25);
      return {
        primaryValue: target.toString(),
        primaryUnit: "kcal",
        statusBadge: "Morning Fuel (25%)",
        statusColor: "emerald",
        interpretation: `Aim for ${target} calories at breakfast with high-protein and high-fiber foods to curb late-morning cravings.`,
        breakdown: [
          { label: "Breakfast Energy", value: target.toString(), unit: "kcal" },
          { label: "Suggested Protein (30g)", value: "120", unit: "kcal" },
        ],
        formulaUsed: "Breakfast Calories = Total Daily Calories × 0.25",
      };
    }

    case "lunch-calorie-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const target = Math.round(cals * 0.35);
      return {
        primaryValue: target.toString(),
        primaryUnit: "kcal",
        statusBadge: "Midday Fuel (35%)",
        statusColor: "emerald",
        interpretation: `Allocate ${target} calories for lunch to supply sustained cognitive and metabolic energy through the afternoon.`,
        breakdown: [
          { label: "Lunch Energy", value: target.toString(), unit: "kcal" },
          { label: "Daily Share", value: "35%", unit: "" },
        ],
        formulaUsed: "Lunch Calories = Total Daily Calories × 0.35",
      };
    }

    case "dinner-calorie-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const target = Math.round(cals * 0.25);
      return {
        primaryValue: target.toString(),
        primaryUnit: "kcal",
        statusBadge: "Evening Fuel (25%)",
        statusColor: "emerald",
        interpretation: `Consume ${target} calories at dinner at least 2–3 hours before bed for sound digestive rest and quality sleep.`,
        breakdown: [
          { label: "Dinner Energy", value: target.toString(), unit: "kcal" },
          { label: "Daily Share", value: "25%", unit: "" },
        ],
        formulaUsed: "Dinner Calories = Total Daily Calories × 0.25",
      };
    }

    case "snack-calorie-calculator": {
      const cals = num(inputs.dailyCalories, 2000);
      const target = Math.round(cals * 0.15);
      return {
        primaryValue: target.toString(),
        primaryUnit: "kcal",
        statusBadge: "Healthy Snack Budget (15%)",
        statusColor: "emerald",
        interpretation: `Your snack allowance is ${target} calories. Opt for whole foods like roasted chana, almonds, Greek yogurt, or fruit.`,
        breakdown: [
          { label: "Snack Allowance", value: target.toString(), unit: "kcal" },
        ],
        formulaUsed: "Snack Calories = Total Daily Calories × 0.15",
      };
    }

    case "portion-size-calculator":
    case "food-quantity-calculator":
    case "food-portion-converter": {
      const targetCals = num(inputs.targetCalories, 450);
      const density = num(inputs.calPer100g, 130);
      const gramsRequired = Math.round((targetCals / density) * 100);
      return {
        primaryValue: gramsRequired.toString(),
        primaryUnit: "grams",
        statusBadge: "Required Food Portion",
        statusColor: "emerald",
        interpretation: `To reach ${targetCals} calories from a food containing ${density} kcal per 100g, measure out exactly ${gramsRequired} grams.`,
        breakdown: [
          { label: "Portion Weight", value: gramsRequired.toString(), unit: "grams" },
          { label: "Calorie Density", value: density.toString(), unit: "kcal/100g" },
          { label: "Target Energy", value: targetCals.toString(), unit: "kcal" },
        ],
        formulaUsed: "Portion (g) = (Target Calories / Density per 100g) × 100",
      };
    }

    case "recipe-calorie-calculator":
    case "per-serving-calculator": {
      const total = num(inputs.totalRecipeCalories, 1800);
      const servings = Math.max(1, num(inputs.servings, 4));
      const perServing = Math.round(total / servings);
      return {
        primaryValue: perServing.toString(),
        primaryUnit: "kcal/serving",
        statusBadge: "Per-Serving Energy",
        statusColor: "emerald",
        interpretation: `Each single portion of this recipe delivers ${perServing} calories across ${servings} total plate servings.`,
        breakdown: [
          { label: "Calories Per Serving", value: perServing.toString(), unit: "kcal" },
          { label: "Total Dish Calories", value: total.toLocaleString(), unit: "kcal" },
          { label: "Servings Count", value: servings.toString(), unit: "servings" },
        ],
        formulaUsed: "Per Serving = Total Dish Calories / Number of Servings",
      };
    }

    // ─── Category 6: Weight Management ──────────────────────────────────────
    case "weight-loss-timeline-calculator": {
      const cur = num(inputs.currentWeight, 82);
      const tgt = num(inputs.targetWeight, 70);
      const def = num(inputs.dailyDeficit, 500);
      const toLose = Math.max(0, cur - tgt);
      if (toLose === 0) {
        return {
          primaryValue: "0",
          primaryUnit: "weeks",
          statusBadge: "Goal Achieved",
          statusColor: "emerald",
          interpretation: "You have already reached your target goal weight! Maintain with balanced nutrition.",
          breakdown: [{ label: "Weight to Lose", value: "0", unit: "kg" }],
          formulaUsed: "Timeline = (Weight to lose × 7700 kcal) / Daily Deficit",
        };
      }
      const days = (toLose * 7700) / def;
      const weeks = Math.ceil(days / 7);
      const months = (days / 30.4).toFixed(1);
      return {
        primaryValue: weeks.toString(),
        primaryUnit: "weeks",
        statusBadge: "Sustainable Timeline",
        statusColor: "emerald",
        interpretation: `To lose ${toLose.toFixed(1)} kg at a ${def} kcal/day deficit, you will reach your target in approximately ${weeks} weeks (${months} months).`,
        breakdown: [
          { label: "Weight to Lose", value: toLose.toFixed(1), unit: "kg" },
          { label: "Estimated Weeks", value: weeks.toString(), unit: "weeks" },
          { label: "Estimated Months", value: months, unit: "months" },
          { label: "Weekly Rate", value: ((def * 7) / 7700).toFixed(2), unit: "kg/week" },
        ],
        formulaUsed: "Duration (Days) = (Weight to lose in kg × 7700 kcal) / Daily Deficit",
      };
    }

    case "weight-gain-timeline-calculator": {
      const cur = num(inputs.currentWeight, 60);
      const tgt = num(inputs.targetWeight, 68);
      const sur = num(inputs.dailySurplus, 400);
      const toGain = Math.max(0, tgt - cur);
      const days = (toGain * 7700) / sur;
      const weeks = Math.ceil(days / 7);
      const months = (days / 30.4).toFixed(1);
      return {
        primaryValue: weeks.toString(),
        primaryUnit: "weeks",
        statusBadge: "Hypertrophy Timeline",
        statusColor: "emerald",
        interpretation: `Gaining ${toGain.toFixed(1)} kg cleanly at a ${sur} kcal/day surplus will take approx ${weeks} weeks (${months} months).`,
        breakdown: [
          { label: "Weight to Gain", value: toGain.toFixed(1), unit: "kg" },
          { label: "Estimated Weeks", value: weeks.toString(), unit: "weeks" },
          { label: "Estimated Months", value: months, unit: "months" },
        ],
        formulaUsed: "Duration = (Weight to gain × 7700 kcal) / Daily Surplus",
      };
    }

    case "weekly-weight-change-calculator":
    case "monthly-weight-change-calculator":
    case "calorie-to-weight-calculator": {
      const bal = num(inputs.dailyBalance, -500);
      const weeklyKg = (bal * 7) / 7700;
      const monthlyKg = (bal * 30.4) / 7700;
      const isLoss = bal < 0;
      return {
        primaryValue: Math.abs(weeklyKg).toFixed(2),
        primaryUnit: `kg / week ${isLoss ? "loss" : "gain"}`,
        statusBadge: isLoss ? "Weekly Deficit Pace" : "Weekly Surplus Pace",
        statusColor: "emerald",
        interpretation: `A daily caloric balance of ${bal} kcal produces approx ${Math.abs(weeklyKg).toFixed(2)} kg of weight change per week (${Math.abs(monthlyKg).toFixed(1)} kg per month).`,
        breakdown: [
          { label: "Weekly Rate", value: Math.abs(weeklyKg).toFixed(2), unit: "kg/week" },
          { label: "Monthly Projection", value: Math.abs(monthlyKg).toFixed(1), unit: "kg/month" },
          { label: "Calorie Imbalance", value: bal.toString(), unit: "kcal/day" },
        ],
        formulaUsed: "Weekly Change (kg) = (Daily Calorie Imbalance × 7) / 7700 kcal",
      };
    }

    case "target-weight-calculator": {
      const hM = height / 100;
      const tBmi = num(inputs.targetBmi, 22.0);
      const goalW = (tBmi * hM * hM).toFixed(1);
      return {
        primaryValue: goalW,
        primaryUnit: "kg",
        statusBadge: `Goal for BMI ${tBmi}`,
        statusColor: "emerald",
        interpretation: `To reach your target BMI of ${tBmi} kg/m² at a height of ${height} cm, your target body weight is ${goalW} kg.`,
        breakdown: [
          { label: "Target Body Weight", value: goalW, unit: "kg" },
          { label: "Target BMI", value: tBmi.toString(), unit: "kg/m²" },
        ],
        formulaUsed: "Target Weight (kg) = Target BMI × [Height in meters]²",
      };
    }

    case "weight-difference-calculator": {
      const cur = num(inputs.currentWeight, 80);
      const tgt = num(inputs.targetWeight, 68);
      const diff = cur - tgt;
      return {
        primaryValue: Math.abs(diff).toFixed(1),
        primaryUnit: "kg",
        statusBadge: diff > 0 ? "Weight to Lose" : (diff < 0 ? "Weight to Gain" : "At Goal"),
        statusColor: "emerald",
        interpretation: diff > 0
          ? `You are ${diff.toFixed(1)} kg above your target goal weight.`
          : (diff < 0 ? `You are ${Math.abs(diff).toFixed(1)} kg below your target goal weight.` : "You have reached your goal!"),
        breakdown: [
          { label: "Weight Difference", value: Math.abs(diff).toFixed(1), unit: "kg" },
          { label: "Current Weight", value: cur.toString(), unit: "kg" },
          { label: "Target Weight", value: tgt.toString(), unit: "kg" },
        ],
        formulaUsed: "Difference = |Current Weight - Target Goal Weight|",
      };
    }

    case "weight-loss-percentage-calculator":
    case "weight-gain-percentage-calculator":
    case "progress-percentage-calculator": {
      const initW = num(inputs.initialWeight, 85);
      const curW = num(inputs.currentWeight, 78);
      const goalW = num(inputs.goalWeight, 70);
      const lost = initW - curW;
      const totalToLose = Math.max(0.1, initW - goalW);
      const pctLost = Math.max(0, (lost / initW) * 100);
      const progressPct = Math.min(100, Math.max(0, (lost / totalToLose) * 100));
      return {
        primaryValue: pctLost.toFixed(1),
        primaryUnit: "% lost",
        statusBadge: `${progressPct.toFixed(0)}% to Ultimate Goal`,
        statusColor: "emerald",
        interpretation: `You have dropped ${lost.toFixed(1)} kg (${pctLost.toFixed(1)}% of your starting weight), completing ${progressPct.toFixed(0)}% of your journey to ${goalW} kg.`,
        breakdown: [
          { label: "Total Weight Reduced", value: lost.toFixed(1), unit: "kg" },
          { label: "% of Baseline Dropped", value: pctLost.toFixed(1), unit: "%" },
          { label: "Journey Completion", value: progressPct.toFixed(0), unit: "%" },
        ],
        formulaUsed: "Loss % = [(Initial Wt - Current Wt) / Initial Wt] × 100",
      };
    }

    // ─── Category 7: Nutrition & Food ───────────────────────────────────────
    case "food-calorie-calculator": {
      const p = num(inputs.protein, 25);
      const c = num(inputs.carbs, 55);
      const f = num(inputs.fat, 14);
      const fib = num(inputs.fiber, 8);
      const netCarbs = Math.max(0, c - fib);
      const totalCals = Math.round(p * 4 + netCarbs * 4 + fib * 2 + f * 9);
      return {
        primaryValue: totalCals.toString(),
        primaryUnit: "kcal",
        statusBadge: "Food Energy Value",
        statusColor: "emerald",
        interpretation: `Based on Atwater factors (Protein 4, Net Carbs 4, Fiber 2, Fat 9 kcal/g), this food provides ${totalCals} total calories.`,
        breakdown: [
          { label: "Total Energy", value: totalCals.toString(), unit: "kcal" },
          { label: "From Protein", value: (p * 4).toString(), unit: "kcal" },
          { label: "From Carbs & Fiber", value: (netCarbs * 4 + fib * 2).toString(), unit: "kcal" },
          { label: "From Fat", value: (f * 9).toString(), unit: "kcal" },
        ],
        formulaUsed: "Energy = (Protein × 4) + (Net Carbs × 4) + (Fiber × 2) + (Fat × 9)",
      };
    }

    case "food-protein-calculator":
    case "food-carbohydrate-calculator":
    case "food-fat-calculator":
    case "food-fiber-calculator": {
      const nutrientG = num(inputs.nutrientGrams, 30);
      const servingG = Math.max(1, num(inputs.servingWeight, 150));
      const densityPer100 = ((nutrientG / servingG) * 100).toFixed(1);
      return {
        primaryValue: densityPer100,
        primaryUnit: "g per 100g",
        statusBadge: "Nutrient Density",
        statusColor: "emerald",
        interpretation: `This food has a nutrient density of ${densityPer100}% (${densityPer100} grams per 100 grams of edible portion).`,
        breakdown: [
          { label: "Density per 100g", value: densityPer100, unit: "g/100g" },
          { label: "Portion Nutrient", value: nutrientG.toString(), unit: "grams" },
          { label: "Serving Weight", value: servingG.toString(), unit: "grams" },
        ],
        formulaUsed: "Density = (Nutrient Grams / Portion Weight) × 100",
      };
    }

    case "food-energy-converter":
    case "kcal-to-kj-converter": {
      const val = num(inputs.inputValue, 500);
      const mode = inputs.conversionType || "kcalToKj";
      let result = 0;
      let unit = "kJ";
      if (mode === "kcalToKj") {
        result = val * 4.184;
        unit = "kJ";
      } else {
        result = val / 4.184;
        unit = "kcal";
      }
      return {
        primaryValue: result.toFixed(1),
        primaryUnit: unit,
        statusBadge: "Scientific Conversion",
        statusColor: "emerald",
        interpretation: `${val} ${mode === "kcalToKj" ? "kcal" : "kJ"} equals ${result.toFixed(1)} ${unit}.`,
        breakdown: [
          { label: "Input Value", value: val.toString(), unit: mode === "kcalToKj" ? "kcal" : "kJ" },
          { label: "Converted Value", value: result.toFixed(1), unit },
          { label: "Constant Ratio", value: "1 kcal = 4.184 kJ", unit: "" },
        ],
        formulaUsed: "1 kcal = 4.184 kJ (Joule definition)",
      };
    }

    case "mg-to-mcg-converter": {
      const val = num(inputs.inputValue, 5);
      const mode = inputs.conversionType || "mgToMcg";
      const result = mode === "mgToMcg" ? val * 1000 : val / 1000;
      const unit = mode === "mgToMcg" ? "mcg" : "mg";
      return {
        primaryValue: result.toString(),
        primaryUnit: unit,
        statusBadge: "Micronutrient Conversion",
        statusColor: "emerald",
        interpretation: `${val} ${mode === "mgToMcg" ? "mg" : "mcg"} converts to ${result} ${unit}.`,
        breakdown: [
          { label: "Converted Amount", value: result.toString(), unit },
          { label: "Factor", value: "1 mg = 1000 mcg (µg)", unit: "" },
        ],
        formulaUsed: "1 Milligram (mg) = 1,000 Micrograms (mcg)",
      };
    }

    case "raw-to-cooked-weight-calculator": {
      const rawG = num(inputs.rawWeight, 100);
      const foodType = inputs.foodType || "rice";
      let yieldFactor = 2.8;
      if (foodType === "dal") yieldFactor = 2.3;
      else if (foodType === "oats") yieldFactor = 3.5;
      else if (foodType === "meat") yieldFactor = 0.75;
      else if (foodType === "greens") yieldFactor = 0.4;
      const cookedG = Math.round(rawG * yieldFactor);
      return {
        primaryValue: cookedG.toString(),
        primaryUnit: "g cooked",
        statusBadge: "Cooked Yield Equivalent",
        statusColor: "emerald",
        interpretation: `${rawG} grams of raw ${foodType} yields approximately ${cookedG} grams when fully cooked.`,
        breakdown: [
          { label: "Cooked Weight", value: cookedG.toString(), unit: "grams" },
          { label: "Raw Starting Weight", value: rawG.toString(), unit: "grams" },
          { label: "Yield Factor", value: `${yieldFactor}x`, unit: "" },
        ],
        formulaUsed: "Cooked Weight = Raw Weight × Hydration/Shrinkage Factor",
      };
    }

    case "recipe-scaling-calculator": {
      const origS = Math.max(1, num(inputs.originalServings, 4));
      const tgtS = Math.max(1, num(inputs.targetServings, 10));
      const ingr = num(inputs.ingredientAmount, 250);
      const factor = tgtS / origS;
      const scaled = (ingr * factor).toFixed(1);
      return {
        primaryValue: scaled,
        primaryUnit: "units",
        statusBadge: `Scale Factor ${factor.toFixed(2)}x`,
        statusColor: "emerald",
        interpretation: `To scale your recipe from ${origS} to ${tgtS} servings, multiply each ingredient by ${factor.toFixed(2)}x (e.g. ${ingr}g becomes ${scaled}g).`,
        breakdown: [
          { label: "Scaled Ingredient", value: scaled, unit: "" },
          { label: "Multiplier", value: `${factor.toFixed(2)}x`, unit: "" },
        ],
        formulaUsed: "Scaled Quantity = Original Quantity × (Target Servings / Original Servings)",
      };
    }

    case "oil-calorie-calculator": {
      const count = num(inputs.spoonsCount, 3);
      const type = inputs.spoonType || "tsp";
      const mlPerSpoon = type === "tbsp" ? 15 : 5;
      const calPerSpoon = type === "tbsp" ? 135 : 45;
      const totalMl = count * mlPerSpoon;
      const totalCals = Math.round(count * calPerSpoon);
      return {
        primaryValue: totalCals.toString(),
        primaryUnit: "kcal",
        statusBadge: "Hidden Oil Calories",
        statusColor: "amber",
        interpretation: `${count} ${type}s of cooking oil delivers ${totalMl} ml of pure fat and ${totalCals} concentrated calories.`,
        breakdown: [
          { label: "Total Calories", value: totalCals.toString(), unit: "kcal" },
          { label: "Total Oil Volume", value: totalMl.toString(), unit: "ml" },
          { label: "Fat Grams", value: totalMl.toString(), unit: "grams fat" },
        ],
        formulaUsed: "Oil Calories = Spoons × (45 kcal for tsp / 135 kcal for tbsp)",
      };
    }

    // ─── Category 8: Special Nutrition ──────────────────────────────────────
    case "pregnancy-calorie-calculator": {
      const preW = num(inputs.preWeight, 60);
      const tri = inputs.trimester || "2";
      let additionalCals = 0;
      if (tri === "2") additionalCals = 340;
      else if (tri === "3") additionalCals = 450;
      const bmr = 10 * preW + 6.25 * height - 5 * 28 - 161;
      const baseMaint = Math.round(bmr * 1.4);
      const totalTarget = baseMaint + additionalCals;
      return {
        primaryValue: totalTarget.toString(),
        primaryUnit: "kcal/day",
        statusBadge: `Trimester ${tri} Target`,
        statusColor: "emerald",
        interpretation: `In trimester ${tri}, add +${additionalCals} kcal/day above baseline (${totalTarget} kcal/day total) for optimal fetal growth without maternal gestational weight risk.`,
        breakdown: [
          { label: "Total Daily Calories", value: totalTarget.toString(), unit: "kcal/day" },
          { label: "Trimester Addition", value: `+${additionalCals}`, unit: "kcal/day" },
          { label: "Suggested Protein", value: (preW * 1.2 + (tri === "1" ? 0 : 25)).toFixed(0), unit: "g/day" },
        ],
        formulaUsed: "Pregnancy Calories = Pre-Pregnancy Maintenance + Trimester Allowance (+0, +340, +450)",
      };
    }

    case "breastfeeding-calorie-calculator": {
      const feedType = inputs.feedingType || "exclusive";
      const addCals = feedType === "exclusive" ? 500 : 350;
      return {
        primaryValue: `+${addCals}`,
        primaryUnit: "kcal/day surplus",
        statusBadge: "Lactation Energy Demand",
        statusColor: "emerald",
        interpretation: `Exclusive lactation requires approximately ${addCals} additional calories per day plus ~800 ml of extra fluids to sustain milk output.`,
        breakdown: [
          { label: "Lactation Addition", value: `+${addCals}`, unit: "kcal/day" },
          { label: "Extra Water Target", value: "+800", unit: "ml/day" },
          { label: "Daily Protein Add-on", value: "+19", unit: "grams/day" },
        ],
        formulaUsed: "Lactation Demand = Baseline TDEE + 500 kcal/day (ICMR / WHO)",
      };
    }

    case "child-calorie-calculator":
    case "teen-nutrition-calculator":
    case "bmi-for-age-calculator": {
      const childAge = num(inputs.age, 11);
      const childWeight = num(inputs.weight, 36);
      const childHeight = num(inputs.height, 142);
      const hM = childHeight / 100;
      const bmi = (childWeight / (hM * hM)).toFixed(1);
      const pediatricCals = Math.round(1000 + childAge * 100);
      return {
        primaryValue: pediatricCals.toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Pediatric Energy Recommendation",
        statusColor: "emerald",
        interpretation: `An active ${childAge}-year-old requires approx ${pediatricCals} kcal/day and 1.0–1.2g/kg protein (${Math.round(childWeight * 1.1)}g) to support linear growth.`,
        breakdown: [
          { label: "Daily Calorie Estimate", value: pediatricCals.toString(), unit: "kcal" },
          { label: "Current BMI", value: bmi, unit: "kg/m²" },
          { label: "Daily Protein Target", value: Math.round(childWeight * 1.1).toString(), unit: "grams" },
        ],
        formulaUsed: "Pediatric Energy = 1000 kcal + (Age × 100 kcal)",
      };
    }

    case "senior-nutrition-calculator": {
      const seniorAge = num(inputs.age, 68);
      const seniorWeight = num(inputs.weight, 66);
      const proteinTarget = Math.round(seniorWeight * 1.2);
      const maintCals = Math.round(seniorWeight * 26);
      return {
        primaryValue: proteinTarget.toString(),
        primaryUnit: "g protein/day",
        statusBadge: "Sarcopenia Defense Target",
        statusColor: "emerald",
        interpretation: `Seniors require higher protein (${proteinTarget}g at 1.2g/kg) combined with ~ ${maintCals} calories to prevent muscle wasting (sarcopenia) and osteopenia.`,
        breakdown: [
          { label: "Daily Protein Target", value: proteinTarget.toString(), unit: "grams" },
          { label: "Daily Calorie Estimate", value: maintCals.toString(), unit: "kcal" },
          { label: "Vitamin D3 Ref", value: "800 – 1000", unit: "IU/day" },
          { label: "Calcium Target", value: "1200", unit: "mg/day" },
        ],
        formulaUsed: "Senior Protein = Weight × 1.2 g/kg (PROT-AGE study guidelines)",
      };
    }

    case "athlete-calorie-calculator":
    case "endurance-nutrition-calculator":
    case "muscle-gain-calculator": {
      const athWeight = num(inputs.weight, 74);
      const hours = num(inputs.trainingHours, 2.0);
      const baseMaint = athWeight * 35;
      const trainingBurn = hours * (athWeight * 8);
      const totalAthleteCals = Math.round(baseMaint + trainingBurn);
      const carbTarget = Math.round(athWeight * 7);
      return {
        primaryValue: totalAthleteCals.toString(),
        primaryUnit: "kcal/day",
        statusBadge: "High Performance Fueling",
        statusColor: "emerald",
        interpretation: `With ${hours} hours of training, an athlete weighing ${athWeight} kg needs approx ${totalAthleteCals} kcal/day and ${carbTarget}g carbs for peak power.`,
        breakdown: [
          { label: "Daily Energy Fuel", value: totalAthleteCals.toString(), unit: "kcal/day" },
          { label: "Carb Target (7 g/kg)", value: carbTarget.toString(), unit: "grams/day" },
          { label: "Protein Target (1.8 g/kg)", value: Math.round(athWeight * 1.8).toString(), unit: "grams/day" },
        ],
        formulaUsed: "Athlete Demand = Baseline (35 kcal/kg) + Training Burn (MET × Duration)",
      };
    }

    case "vegan-nutrition-calculator": {
      const vWeight = num(inputs.weight, 68);
      const vProt = Math.round(vWeight * 1.3);
      return {
        primaryValue: vProt.toString(),
        primaryUnit: "g plant protein/day",
        statusBadge: "Plant-Based Target",
        statusColor: "emerald",
        interpretation: `On a 100% plant-based diet, aim for ${vProt}g protein (accounting for plant digestibility) along with 2500 mcg/week Vitamin B12 and adequate zinc.`,
        breakdown: [
          { label: "Plant Protein Target", value: vProt.toString(), unit: "grams" },
          { label: "Vitamin B12 Requirement", value: "2.4 mcg/day (or 2500 mcg/wk)", unit: "" },
          { label: "Iron Absorption Tip", value: "Pair with Vitamin C (Lemon/Amla)", unit: "" },
        ],
        formulaUsed: "Vegan Protein Target = Weight × 1.3 g/kg",
      };
    }

    // ─── Category 9: Clinical Nutrition ─────────────────────────────────────
    case "diabetes-carbohydrate-calculator": {
      const carbs = num(inputs.carbsGrams, 45);
      const choices = (carbs / 15).toFixed(1);
      return {
        primaryValue: choices,
        primaryUnit: "carb choices",
        statusBadge: "Carb Counting Allocation",
        statusColor: "emerald",
        interpretation: `${carbs} grams of available carbohydrates equals ${choices} diabetic carbohydrate choices (1 choice = 15g carbs).`,
        breakdown: [
          { label: "Carb Choices", value: choices, unit: "choices" },
          { label: "Available Carbs", value: carbs.toString(), unit: "grams" },
          { label: "Target per Meal", value: "3 – 4 choices (45–60g)", unit: "" },
        ],
        formulaUsed: "Carb Choices = Total Available Carbohydrate (g) / 15",
      };
    }

    case "glycemic-load-calculator":
    case "glycemic-index-calculator": {
      const carbs = num(inputs.carbsGrams, 45);
      const gi = num(inputs.glycemicIndex, 58);
      const gl = (gi * carbs) / 100;
      let status = "Low Glycemic Load (<10)";
      let color = "emerald";
      if (gl >= 10 && gl <= 19) {
        status = "Medium Glycemic Load (10–19)";
        color = "amber";
      } else if (gl >= 20) {
        status = "High Glycemic Load (≥20)";
        color = "rose";
      }
      return {
        primaryValue: gl.toFixed(1),
        primaryUnit: "GL score",
        statusBadge: status,
        statusColor: color,
        interpretation: `A GL score of ${gl.toFixed(1)} reflects how much the portion will impact blood sugar. Lower GL foods help prevent insulin spikes.`,
        breakdown: [
          { label: "Glycemic Load", value: gl.toFixed(1), unit: "" },
          { label: "Glycemic Index", value: gi.toString(), unit: "" },
          { label: "Available Carbs", value: carbs.toString(), unit: "grams" },
        ],
        formulaUsed: "Glycemic Load (GL) = [Glycemic Index × Available Carbs (g)] / 100",
      };
    }

    case "sodium-restriction-calculator":
    case "cholesterol-intake-calculator": {
      const condition = inputs.condition || "hypertension";
      let capMg = 2000;
      let saltGrams = 5;
      if (condition === "hypertension") {
        capMg = 1500;
        saltGrams = 3.75;
      } else if (condition === "strict") {
        capMg = 1000;
        saltGrams = 2.5;
      }
      return {
        primaryValue: capMg.toString(),
        primaryUnit: "mg sodium/day",
        statusBadge: "Strict DASH Target",
        statusColor: "amber",
        interpretation: `Limit daily sodium to ${capMg} mg (approx ${saltGrams} grams of table salt) to reduce intravascular fluid volume and arterial pressure.`,
        breakdown: [
          { label: "Max Sodium Limit", value: capMg.toString(), unit: "mg/day" },
          { label: "Salt Equivalent (NaCl)", value: saltGrams.toFixed(1), unit: "grams/day" },
          { label: "Teaspoon Salt Cap", value: (saltGrams / 5).toFixed(1), unit: "tsp/day" },
        ],
        formulaUsed: "Clinical DASH Sodium Restriction Protocol",
      };
    }

    case "renal-protein-calculator": {
      const dryW = num(inputs.weight, 68);
      const stage = inputs.ckdStage || "predialysis";
      let factor = 0.6;
      let label = "CKD Pre-Dialysis Target (0.6g/kg)";
      if (stage === "early") { factor = 0.8; label = "CKD Stage 1-2 (0.8g/kg)"; }
      else if (stage === "dialysis") { factor = 1.2; label = "Hemodialysis Target (1.2g/kg)"; }
      else if (stage === "pd") { factor = 1.3; label = "Peritoneal Dialysis Target (1.3g/kg)"; }
      const proteinG = Math.round(dryW * factor);
      return {
        primaryValue: proteinG.toString(),
        primaryUnit: "g/day",
        statusBadge: label,
        statusColor: "emerald",
        interpretation: `Based on ${label}, limit or target ${proteinG} grams of protein daily to avoid excessive nitrogenous waste accumulation.`,
        breakdown: [
          { label: "Daily Protein Target", value: proteinG.toString(), unit: "grams/day" },
          { label: "Factor per kg Dry Weight", value: `${factor} g/kg`, unit: "" },
        ],
        formulaUsed: "Renal Protein (g) = Dry Body Weight (kg) × CKD Stage Multiplier",
      };
    }

    case "renal-fluid-calculator": {
      const uOut = num(inputs.urineOut, 800);
      const allowedFluid = uOut + 600; // Urine Output + 500-750ml insensible
      return {
        primaryValue: allowedFluid.toString(),
        primaryUnit: "ml/day",
        statusBadge: "Renal Fluid Restriction",
        statusColor: "amber",
        interpretation: `To prevent hypervolemia and pulmonary edema, total 24-hr fluid intake must not exceed ${allowedFluid} ml (Urine Output + 600ml insensible).`,
        breakdown: [
          { label: "Max 24-Hr Fluid Allowance", value: allowedFluid.toString(), unit: "ml" },
          { label: "24-Hr Urine Output", value: uOut.toString(), unit: "ml" },
          { label: "Insensible Allowance", value: "600", unit: "ml" },
        ],
        formulaUsed: "Allowed Fluid (ml) = 24h Urine Output + 600ml Insensible Loss",
      };
    }

    case "enteral-feeding-calculator": {
      const targetCals = num(inputs.targetCalories, 1800);
      const density = num(inputs.formulaDensity, 1.2);
      const hours = num(inputs.infusionHours, 24);
      const totalVolumeMl = Math.round(targetCals / density);
      const hourlyRate = Math.round(totalVolumeMl / hours);
      return {
        primaryValue: hourlyRate.toString(),
        primaryUnit: "ml/hr",
        statusBadge: "Tube Infusion Rate",
        statusColor: "emerald",
        interpretation: `Infuse formula at ${hourlyRate} ml/hour over ${hours} hours to deliver ${targetCals} kcal with a ${density} kcal/ml formula.`,
        breakdown: [
          { label: "Hourly Infusion Rate", value: hourlyRate.toString(), unit: "ml/hr" },
          { label: "Total 24h Formula Volume", value: totalVolumeMl.toString(), unit: "ml" },
          { label: "Estimated Free Water", value: Math.round(totalVolumeMl * 0.8).toString(), unit: "ml" },
        ],
        formulaUsed: "Rate (ml/hr) = (Target Calories / Formula Density) / Infusion Hours",
      };
    }

    case "protein-energy-ratio-calculator": {
      const protG = num(inputs.proteinGrams, 75);
      const totalC = Math.max(1, num(inputs.totalCalories, 1800));
      const protCals = protG * 4;
      const peRatio = ((protCals / totalC) * 100).toFixed(1);
      return {
        primaryValue: `${peRatio}%`,
        primaryUnit: "P:E ratio",
        statusBadge: peRatio >= 15 ? "High Satiety / Protein Dense" : "Standard Ratio",
        statusColor: "emerald",
        interpretation: `Protein accounts for ${peRatio}% of total caloric content in this diet plan (healthy target is between 15% and 25%).`,
        breakdown: [
          { label: "Protein-Energy Ratio", value: `${peRatio}%`, unit: "" },
          { label: "Protein Calories", value: protCals.toString(), unit: "kcal" },
          { label: "Total Calories", value: totalC.toString(), unit: "kcal" },
        ],
        formulaUsed: "P:E Ratio (%) = [(Protein in grams × 4) / Total Calories] × 100",
      };
    }

    case "nutrition-risk-screening-calculator": {
      const s1 = num(inputs.weightLossPct, 0);
      const s2 = num(inputs.bmiScore, 0);
      const s3 = num(inputs.intakeReduction, 0);
      const totalScore = s1 + s2 + s3;
      let status = "Low Risk (Score 0)";
      let color = "emerald";
      if (totalScore >= 1 && totalScore <= 2) {
        status = "Medium Risk (Score 1-2)";
        color = "amber";
      } else if (totalScore >= 3) {
        status = "High Malnutrition Risk (Score ≥3)";
        color = "rose";
      }
      return {
        primaryValue: totalScore.toString(),
        primaryUnit: "points",
        statusBadge: status,
        statusColor: color,
        interpretation: totalScore >= 2
          ? "Patient is at significant nutritional risk. Clinical dietitian evaluation and nutritional support plan are indicated."
          : "Patient is at low nutritional risk. Routine monitoring recommended.",
        breakdown: [
          { label: "NRS Total Score", value: totalScore.toString(), unit: "/ 6" },
          { label: "Clinical Action", value: totalScore >= 2 ? "Immediate Consultation" : "Routine Follow-up", unit: "" },
        ],
        formulaUsed: "NRS-2002 / MUST Malnutrition Screening Protocol",
      };
    }

    // ─── Category 10: Professional Dietitian Tools ──────────────────────────
    case "harris-benedict-calculator": {
      let bmr = 0;
      if (gender === "female") {
        bmr = 655.1 + 9.563 * weight + 1.850 * height - 4.676 * age;
      } else {
        bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
      }
      return {
        primaryValue: Math.round(bmr).toString(),
        primaryUnit: "kcal/day",
        statusBadge: "Classic Clinical BMR",
        statusColor: "emerald",
        interpretation: `Harris-Benedict equation yields ${Math.round(bmr)} kcal/day resting metabolic rate.`,
        breakdown: [
          { label: "Harris-Benedict BMR", value: Math.round(bmr).toString(), unit: "kcal/day" },
          { label: "Hourly Burn", value: (bmr / 24).toFixed(1), unit: "kcal/hr" },
        ],
        formulaUsed: gender === "female" ? "655.1 + 9.563×W + 1.85×H - 4.676×A" : "66.5 + 13.75×W + 5.003×H - 6.755×A",
      };
    }

    case "katch-mcardle-calculator": {
      const bf = num(inputs.bodyFat, 18);
      const lbm = weight * (1 - bf / 100);
      const bmr = 370 + 21.6 * lbm;
      return {
        primaryValue: Math.round(bmr).toString(),
        primaryUnit: "kcal/day",
        statusBadge: "LBM-Based Metabolic Rate",
        statusColor: "emerald",
        interpretation: `Based on ${lbm.toFixed(1)} kg of lean body mass, your Katch-McArdle BMR is ${Math.round(bmr)} kcal/day (independent of age or gender).`,
        breakdown: [
          { label: "Katch-McArdle BMR", value: Math.round(bmr).toString(), unit: "kcal/day" },
          { label: "Lean Body Mass", value: lbm.toFixed(1), unit: "kg" },
        ],
        formulaUsed: "BMR = 370 + (21.6 × Lean Body Mass in kg)",
      };
    }

    case "schofield-calculator": {
      let bmr = 0;
      if (gender === "male") {
        if (age < 18) bmr = 17.686 * weight + 658.2;
        else if (age < 30) bmr = 15.057 * weight + 692.2;
        else if (age < 60) bmr = 11.472 * weight + 873.1;
        else bmr = 11.711 * weight + 587.7;
      } else {
        if (age < 18) bmr = 13.384 * weight + 692.6;
        else if (age < 30) bmr = 14.818 * weight + 486.6;
        else if (age < 60) bmr = 8.126 * weight + 845.6;
        else bmr = 9.082 * weight + 658.5;
      }
      return {
        primaryValue: Math.round(bmr).toString(),
        primaryUnit: "kcal/day",
        statusBadge: "WHO/FAO Schofield Standard",
        statusColor: "emerald",
        interpretation: `WHO/FAO Schofield clinical equation estimates your BMR at ${Math.round(bmr)} kcal/day.`,
        breakdown: [
          { label: "Schofield BMR", value: Math.round(bmr).toString(), unit: "kcal/day" },
          { label: "International Ref", value: "WHO / FAO / UNU", unit: "" },
        ],
        formulaUsed: "Schofield Age/Sex Regression Equations",
      };
    }

    case "adjusted-body-weight-calculator": {
      const inchesOver5Ft = Math.max(0, (height / 2.54) - 60);
      let ibw = gender === "female" ? 45.5 + 2.3 * inchesOver5Ft : 50.0 + 2.3 * inchesOver5Ft;
      if (height < 152.4) ibw = gender === "female" ? 45.5 : 50.0;
      const abw = ibw + 0.4 * (weight - ibw);
      return {
        primaryValue: abw.toFixed(1),
        primaryUnit: "kg",
        statusBadge: "Adjusted Weight (ABW)",
        statusColor: "emerald",
        interpretation: `In clinical cases where actual weight (${weight} kg) is >120% of IBW (${ibw.toFixed(1)} kg), use ABW of ${abw.toFixed(1)} kg to prevent nutritional and drug overfeeding.`,
        breakdown: [
          { label: "Adjusted Body Weight (ABW)", value: abw.toFixed(1), unit: "kg" },
          { label: "Ideal Body Weight (IBW)", value: ibw.toFixed(1), unit: "kg" },
          { label: "Actual Body Weight", value: weight.toString(), unit: "kg" },
        ],
        formulaUsed: "ABW = IBW + 0.4 × (Actual Weight - IBW)",
      };
    }

    case "nutrition-percentage-calculator": {
      const amount = num(inputs.nutrientAmount, 45);
      const dv = Math.max(1, num(inputs.dailyValue, 90));
      const pct = ((amount / dv) * 100).toFixed(1);
      return {
        primaryValue: `${pct}%`,
        primaryUnit: "% Daily Value",
        statusBadge: pct >= 20 ? "High Source (≥20% DV)" : (pct >= 10 ? "Good Source (10-19% DV)" : "Low Contribution (<10% DV)"),
        statusColor: "emerald",
        interpretation: `${amount} units provides ${pct}% of the standard Daily Value (${dv} units).`,
        breakdown: [
          { label: "% Daily Value", value: `${pct}%`, unit: "" },
          { label: "Amount Consumed", value: amount.toString(), unit: "" },
          { label: "Reference Daily Value", value: dv.toString(), unit: "" },
        ],
        formulaUsed: "% DV = (Nutrient Amount / Standard Daily Value) × 100",
      };
    }

    default: {
      return {
        primaryValue: "Calculated",
        primaryUnit: "",
        statusBadge: "Active Tool",
        statusColor: "emerald",
        interpretation: "Input your parameters above to receive clinically validated dietary and metabolic insights.",
        breakdown: [
          { label: "Weight Assessed", value: weight.toString(), unit: "kg" },
          { label: "Height Assessed", value: height.toString(), unit: "cm" },
        ],
        formulaUsed: "Standard Clinical Nutrition Algorithm",
      };
    }
  }
}
