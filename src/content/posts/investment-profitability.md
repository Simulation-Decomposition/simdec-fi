---
title: "Simple investment case"
date: 2026-04-09
category: "cases"
order: 1
summary: "A super simple model to illustrate SimDec in action."
tags: ["simdec", "cash flow", "finance", "investment analysis"]
---

Investment profitability modeling is an essential tool for decision-making support. From building a power plant to developing a new product or starting our own business, investment profitability helps us decide if it’s worth it. Being a forward-looking exercise, it is naturally affected by multiple uncertainties. And knowing what affects profitability the most equips the decision-maker with strategic wisdom. 

The Excel model, simulation dataset and other supporting materials are available [here](https://github.com/Sensitivity-Analysis-for-Model-Output/HowToTeachSensitivityAnalysis/tree/4fef023c84bdc9db6f394aae2509d7a8f16ff651/case_studies/investment_profitability).

---

## Case description

Consider a simplified investment case: an upfront investment cost of 4000$ allows us to build a facility that produces 100 units of product per year for four years, which we expect to sell at 10$ per unit. For transparency of effects, we assume no operation costs, no taxes, and no discounting. The project value would then be a sum of its cash flows.
<p align="center"><i>Value = -Investment + Production × Price × TimeHorizon</i></p>

If we consider our assumptions to precisely describe the future (can this ever hold true?), the project value is zero, meaning we will pay off our investment but will not earn anything on top of that.
<p align="center"><i>Value =</i> -4000$ + 100 units × 10$ × 4 years <i>=</i> 0$</p>

---

## One-at-a-time sensitivity analysis

The model is simple enough to see that if Investment, production, and price are varied ±50%[^1] one at a time, they will have the same effect on the project value. In the real world, however, uncertainties often happen simultaneously rather than one by one. Would these factors still have the same effect?
[^1]: ±50% is actually a bad choice. For instance, investment costs are more likely to raise high than suddenly become twice lower. Thus, more thought should be put into input variation. In this case, however, such symmetry is needed to illustrate the difference between OAT and GSA.

No! Increasing the investment cost will always have an additive effect, but if both price and production fall, the negative effect on the project value will multiply (observe the corresponding operations in the equation: ‘plus’ between the investment cost and others, and ‘multiplication’ ). What to do? Global sensitivity analysis is the answer.

---

## Global sensitivity analysis

We employ variance-based Sobol’ indices implemented within [the SimDec package](https://github.com/Simulation-Decomposition/simdec-python/)[^2]. To generate the input-output data comparable to the one-at-a-time analysis we performed, we use the same ±50% and uniform distributions. The sample of 50 thousand will let us compute the indices with sufficient precision. 
[^2]: Kozlova, M., Ahola, A., Roy, P. T., & Yeomans, J. S. (2025). Simple binning algorithm and SimDec visualization for comprehensive sensitivity analysis of complex computational models. Journal of Environmental Informatics Letters, 13 (1), 38-56.


While first-order effects of the three input variables are the same, the second-order effects reveal interaction between *Production* and *Price*. This makes their overall contribution higher than the effect of the *Investment* cost.

<img width="566" height="101" alt="image" src="https://github.com/user-attachments/assets/bea07ed7-37e7-4a04-ab15-aa4f93cbae38" />

---

## Visualization

SimDec visualization in stacked histogram form is used to examine how the most influential inputs are mapped onto the distribution of the output values (see [short SimDec guide](https://github.com/Confareneoclassico/HowToTeachSensitivityAnalysis/blob/6f797470d9e14c61bfc05392659cad2c848f4a4f/tools/software_resources/SimDec_guide.md)). The algorithm automatically picks up all three equally important variables for decomposition.

<img width="1039" height="302" alt="image" src="https://github.com/user-attachments/assets/ab232ada-3fae-4a55-86c6-e5cbd6c74318" />


The distribution of project *Value* appears close to normal and expectedly centered at zero. The colors, depicting subsets of input space, follow a smooth gradient, which implies a monotonic relationship. It can be noticed that the light-shaded tales stand out more from the mid-shaded scenarios, moving from low values (yellow) to high (red). In simple words, the higher the price is, the more prominent the effect of the production volume would be. This pattern is characteristic of multiplicative interaction and would look more pronounced the higher the second-order index is. Visualization is critical because the same second-order effect may look very different on the graph and, thus, have different implications for decision-making[^3].
[^3]: Kozlova, M., Moss, R. J., Yeomans, J. S., & Caers, J. (2024). Uncovering heterogeneous effects in computational models for sustainable decision-making. Environmental Modelling & Software, 171, 105898.
---

## Implementation

There are several ways to implement this analysis, depending on preferences and the background of the students. All files are provided.

### Excel + SimDec dashboard (no coding)
- Model in Excel `2.1_Investment_model.xlsx`  
- Monte Carlo simulation via Data tables in the same file, data loaded into `2.2_Investment_data.csv`  
- Sensitivity analysis & visualization via web dashboard [simdec.io](https://simdec.io)  

### Jupiter notebook + SimDec dashboard (a bit of coding)
- Model and sampling in Jupiter notebook `3_Investment_model.ipynb` (WAY 1)  
- Sensitivity analysis & visualization via web dashboard [simdec.io](https://simdec.io)  

### Jupiter notebook only
- Model and sampling in Jupiter notebook `3_Investment_model.ipynb` (WAY 2)  
- Sensitivity analysis & visualization via SimDec Python package in the same file  

---

## Additional resources

The case is presented in this [video]([https://simdec.io](https://youtu.be/2uY7KuxWi_U?si=qHnUJANwHC0Tok_T)).
