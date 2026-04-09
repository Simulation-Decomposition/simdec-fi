---
title: "Steel reliability case"
date: 2026-04-09
category: "cases"
summary: "SimDec as a window to a complex engineering model with heterogeneous effects."
tags: ["simdec", "4R model", "engineering", "heterogeneous effects"]
---

# Steel reliability case

We want our bridges, trains, cranes, and factory machines to be strong and last long. Yet steel structures slowly gather tiny, invisible cracks that can grow into serious dangers. To prevent costly breakdowns, reputational damage, or, most importantly, the risk to human lives, it’s crucial to carefully assess the reliability of steel structures. 

## Case description

A new reliability model for steel structures replaces linear assumptions with multi-factor complexity [^1].   The four key recognized factors are: *residual stress* $\sigma_{\text{res}}$, *material strength* $R_{\text{p0.2}}$, *applied stress ratio* $R$, and *weld-toe radius* $r_{\text{true}}$.   As an output value, the mean stress-corrected reference local stress is computed as:
[^1]: Ahola, A., Muikku, A., Braun, M., & Björk, T. (2021). Fatigue strength assessment of ground fillet-welded joints using 4R method. International journal of fatigue, 142, 105916.

$$
\Delta \sigma_{k,\text{ref}} = \Delta \sigma_k (r_{\text{true}}) \, \Big/ \, 
\sqrt{\,1 - R_{\text{local}}(r_{\text{true}}, R_m, \sigma_{\text{res}}, R)\,}
$$

Further details on the model formulation can be accessed in the corresponding study[^2].
[^2]: Ahola, A., Kozlova, M., & Yeomans, J. S. (2024). Capturing multi-dimensional nonlinear behaviour of a steel structure reliability model–global sensitivity analysis. In Sensitivity Analysis for Business, Technology, and Policymaking (pp. 257-282). Routledge.

The target of the sensitivity analysis is to understand and effectively communicate the complex behavior of the model. 

The model simulation is performed 10,000 times, varying the four key factors to reflect different steel grades and operating conditions:

<img width="539" height="170" alt="image" src="https://github.com/user-attachments/assets/1bf0d20e-e4e9-4517-b79b-7fd234dc7770" />

The weld-toe radius is then converted to a more intuitive for engineers fatigue-effective stress, *Kf*.

$$
K_f = K_t \big(r = r_{\text{true}} + 1\,\text{mm}\big),
$$

The resulting [input-output dataset](https://github.com/Sensitivity-Analysis-for-Model-Output/HowToTeachSensitivityAnalysis/tree/4fef023c84bdc9db6f394aae2509d7a8f16ff651/case_studies/steel_reliability) is provided for the analysis. Via the same link you will find a Jupiter notebook to replicate all of the analysis below.

## Global sensitivity analysis

We employ variance-based Sobol’ indices implemented within [the SimDec package](https://github.com/Simulation-Decomposition/simdec-python/)[^3].  
[^3]: Kozlova, M., Ahola, A., Roy, P. T., & Yeomans, J. S. (2025). Simple binning algorithm and SimDec visualization for comprehensive sensitivity analysis of complex computational models. Journal of Environmental Informatics Letters, 13 (1), 38-56.

The resulting sensitivity indices highlight three out of four factors with both combined indices and second-order effects.  
One effect between steel grade and residual stress is negative, pointing to the dependency of these variables – a natural outcome of the way the data was sampled, see the table above.  
(More on negative second-order effects and their interpretation can be found in this paper[^3].)

<img width="572" height="185" alt="image" src="https://github.com/user-attachments/assets/38ffde44-153e-43ea-9857-b7a67b308b18" />


## Visualization

SimDec visualization in stacked histogram form is used to examine how the most influential inputs are mapped onto the distribution of the output values (see [short SimDec guide](https://github.com/Confareneoclassico/HowToTeachSensitivityAnalysis/blob/6f797470d9e14c61bfc05392659cad2c848f4a4f/tools/software_resources/SimDec_guide.md)).  The SimDec algorithm picks up only the first two variables for decomposition, so we add the third one, material grade.

<img width="899" height="305" alt="image" src="https://github.com/user-attachments/assets/863c955a-299f-44a5-aec5-d1eaffd88e0b" />

The visualization reflects the nonmonotonic complexity of the model. The lowest output stresses are only possible under the conditions of low residual stress and low stress ratio, regardless of steel grade (dark red scenarios 7 & 8).  
The mid-range is achievable with different combinations of factors: either the stress ratio goes high while residual stress and steel grade are low (scenario 6); or with low steel grade and high residual stress, irrespective of stress ratio (scenarios 2 & 4, left peak).  
Finally, the high ranges of stress are formed by either all three variables being high (scenario 1); or only stress ratio being low, others high (scenario 3); or only the residual stress being low, others high (scenario 5).

Looking at another angle on these conclusions, we can say that the effect of input variables varies across the output space, or more precisely, depends on the state of other input variables.  
Such complexity would only become apparent via multidimensional data visualization approaches like SimDec or through numerous local re-computations of sensitivity indices. 

## Implementation

The input-output data can be either uploaded to the dashboard [simdec.io](https://simdec.io) or analyzed with the SimDec Python package, see `3_Steel reliability.ipynb`.

## Additional resources

The case is presented in this [video](https://youtu.be/tPSeobeLXtQ?si=B5CO15CqXvqSPYCT) and this publication[^2].

