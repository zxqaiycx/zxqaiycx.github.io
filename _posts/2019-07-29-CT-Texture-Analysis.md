---
layout: post
title: CT Texture Analysis Definitions, Applications, Biologic Correlates, and Challenges
---

## Introduction

There has been growing interest in quantitative imaging biomarkers in recent years, particularly in the evaluation of tumors and cancer response to therapy. 

Tumors are heterogeneous on the gross and cellular levels, as well as the genetic and phenotypic levels, with spatial heterogeneity in cellular density, angiogenesis, and necrosis. This heterogeneity may affect prognosis and treatment. 

Tumor heterogeneity can be difficult to capture and quantify with traditional imaging tools, subjective assessment of images, or random sampling biopsy, which evaluates only a small part of the tumor. Therefore, there is renewed interest in **computed tomographic (CT) texture analysis (CTTA)**, a potentially useful biomarker that allows assessment and quantification of tumor spatial heterogeneity. 

CTTA has shown promise in a variety of tumor types, in predicting pathologic features, response to therapy, and prognosis. In addition, data are emerging to show that CTTA may have utility in a variety of nononcologic applications. However, there are a variety of unknowns, challenges, and limitations related to CTTA that require further investigation.

<u>The purpose of this article is to review the basic concepts of texture analysis, describe oncologic and potential nononcologic applications of CTTA, evaluate histopathologic correlation with individual CTTA parameters, and discuss unknowns, limitations, and challenges around CTTA.</u>

## Basic Concepts of Texture Analysis

<u>Texture analysis provides an objective, quantitative assessment of tumor heterogeneity by analyzing the distribution and relationship of pixel or voxel gray levels in the image.</u> 

Different methods of texture analysis have been applied, including statistical- (most commonly used), model-, and transform-based methods.

In a statistical-based model, 

- First-order statistics evaluate the **gray-level frequency distribution** from the pixel intensity histogram in a given area of interest, including mean intensity, threshold (percentage of pixels within a specified range), entropy (irregularity), standard deviation, skewness (asymmetry), and kurtosis (peakedness/ flatness of pixel histogram). First-order histogram analysis does not account for the location of the pixels and lacks any reference to the spatial interrelationship between gray values.
- Second-order statistics can be based on a **co-occurrence matrix** and include things like second-order entropy, energy, homogeneity, dissimilarity, and correlation. Second-order statistics can also be derived using a **run-length matrix**, which analyzes texture in a specific direction. 
- Higher-order statistics, such as contrast, coarseness, and busyness, can be calculated using **neighborhood gray-tone difference matrices**, which examine location and relationships between three or more pixels. Higher-order features have the advantage of evaluating voxels in their local context, taking the relationship with neighboring voxels into account.

Model-based texture analysis uses advanced mathematical methods such as fractal analysis. 

Transform-based methods convert spatial information into frequency and/or scale (wavelet) information.

An optional image filtration step can be performed.  <u>Studies have demonstrated that texture analysis at CT is feasible by reducing the effect of photon noise, which may mask underlying true biologic heterogeneity, using image filtration.</u> There are a wide variety of imaging filtration methods. A Laplacian or Gaussian bandpass filter is a commonly used advanced image filtration method that alters the image pixel intensity patterns and allows extraction of specific structures corresponding to the width of the filter. Lower filter values correspond to fine texture features, while higher filter values emphasize medium or coarse texture features. In addition, this filtration step is designed to remove noise and enhance edges, which may make measurements less susceptible to small differences in technique. Denoising or gray-level standardization steps have been used as well as a premeasurement step to help eliminate differences that are technical rather than biologic and to aid in reproducibility. 

## Oncologic Applications

Potential oncologic applications of CTTA seem to fall into three main categories: 

- lesion characterization, 
- pretreatment assessment, 
- initial posttreatment assessment to predict therapeutic response.

### Lesion Characterization

A major diagnostic challenge is to accurately differentiate benign from malignant lesions using noninvasive methods. CTTA has the potential to function as a “virtual biopsy” of indeterminate masses.

**Kidney.** — Differentiating benign from malignant renal lesions is a challenging imaging task.

- Raman et al (20) used CTTA to differentiate renal cysts, oncocytomas, clear cell RCC, and papillary RCC (n = 20 each). They found that <u>clustered CTTA features (mean, standard deviation, entropy) in a random forest model</u> allowed correct categorization of cysts in 100% of cases, oncocytoma in 89%, clear cell RCC in 91%, and papillary RCC in 100%. 
- Yan et al (21) found good-to-excellent classification of fat-poor AML versus papillary RCC and clear cell RCC. 
- Hogdon et al (22) found <u>lower lesion homogeneity and higher entropy</u> in RCC than in lipid-poor AMLs at nonenhanced CT. The group of texture features showed an **area under the receiver operating characteristic curve (AUC)** of 0.89 in differentiating these lesions and performed better than subjective assessment. 
- Another group found that <u>skewness</u>, among other CT features, may help identify fat in AMLs that is not visible on conventional images (23).
- Leng et al (24) studied 158 resected small renal masses (<4 cm), which consisted of clear cell RCC (n = 98), papillary RCC (n = 36), and lipid-poor AMLs (n = 24). Clear cell RCC was more heterogeneous than the other two types, both subjectively and objectively <u>using texture features including standard deviation, entropy, and uniformity</u>. However, subjective assessment of heterogeneity performed better than CTTA features in differentiating clear cell RCC from papillary RCC, with an AUC of 0.91 for subjective assessment versus 0.81 for standard deviation, the best-performing texture parameter. Differentiation of papillary RCC from lipid-poor AMLs proved more challenging, as both tumors were subjectively and objectively homogeneous. The authors also applied a denoising algorithm in an attempt to improve assessment of biologic heterogeneity, but results were only slightly improved.

**Liver.** — Another important imaging task is differentiating benign from malignant portal vein thrombus.

- Canellas et al (25) studied 117 patients with portal vein thrombus. They found that <u>texture features including MPP and entropy</u> had AUCs of 0.97 and 0.93, respectively, and 0.99 when combined, in differentiating bland (benign) thrombus from malignant (tumor) thrombus. Texture features performed better than mean Hounsfield unit attenuation alone (AUC = 0.91) and radiologists’ subjective interpretation (AUC = 0.61). 
- Another group looked at use of CTTA in differentiating hypervascular liver lesions including focal nodular hyperplasia, hepatic adenomas, and hepatocellular carcinoma. Using a <u>random forest model</u>, they were able to differentiate these lesion types. Predicted classification performance accuracy was 91.2% for adenoma, 94.4% for focal nodular hyperplasia, and 98.6% for hepatocellular carcinoma (26).

**Pancreas.** — Differentiating pancreatic cystic lesions that are benign from those with malignant potential using routine CT image evaluation is difficult.

- In a retrospective study (27), CTTA was used to differentiate pathologically proven intraductal papillary mucinous neoplasms (IPMNs) with high-grade dysplasia (n = 34) from those with low-grade dysplasia (n = 19). CTTA performed better in identifying lesions with high-grade dysplasia (higher risk for developing malignancy) than did use of imaging features based on the Fukuoka criteria. The best texture feature had an AUC of 0.82, with sensitivity of 85% and specificity of 68% at the optimum threshold. The best <u>logistic regression model</u> had an AUC of 0.96, sensitivity of 97%, and specificity of 88%. Use of the Fukuoka criteria had a false-positive rate of 36%.

**Bowel.** — Multiple studies have evaluated the utility of CTTA in assessing colorectal polyps, which can have a variety of underlying histopathologic features, as well as a spectrum of biologic behavior. Traditionally, colonic polyps have been assessed using size and morphologic features (eg, flat versus nonflat).

-  In a study of 384 polyps, CT texture features had an AUC of 0.80 for differentiating neoplastic from nonneoplastic polyps (28).
- In another study, the same group evaluated 148 colonic lesions, 35 of which were nonneoplastic (29). They found an AUC of 0.74 for classifying neoplastic versus nonneoplastic lesions or hyperplastic versus adenomatous polyps when using <u>image intensity</u> alone, compared with an AUC of 0.85 when <u>texture features like gradient and curvature</u> were included.
-  In an assessment of 63 colorectal masses (≥3 cm) with 32 adenocarcinomas and 31 advanced adenomas, Pooler et al (30) reported an AUC of 0.94 for using texture features to differentiate cancers from advanced adenoma.

**Chest.** — CTTA has also been applied to differentiating benign from malignant entities in the chest. 

-  It has been used to differentiate benign from malignant pulmonary nodules and mediastinal lymph nodes (3,31–34) and to differentiate radiation fibrosis from recurrent lung cancer (3,35,36).

### Primary Tumor Assessment

CTTA features are associated with histopathologic features and clinical outcomes in a variety of primary and metastatic tumors. 

In general, a change in tumor heterogeneity (either increased or decreased) may be associated with treatment response and improved prognosis/outcome. These data suggest that texture features may be useful in treatment planning and prognostication.

- texture features including entropy, standard deviation, and MPP are associated with histologic subtype, and associated with time to recurrence and overall survival
- kurtosis was associated with neovascularity and Ki-67 in small renal masses
- low-grade tumors were less heterogeneous, with significantly lower mean gray-level intensity, entropy, and MPP than high-grade tumors. MPP less than 24.1 on nonenhanced images was the optimal texture parameter for differentiation.
- low kurtosis correlated with poor overall survival and higher MPP (threshold of >29.4) was associated with better progression-free survival.
- CTTA parameters including mean attenuation, MPP, skewness, kurtosis, and entropy allowed distinction between low-grade and high-grade PNETs
- texture features could be used to predict overall survival and may be useful in making treatment decisions (surgery vs embolization) (43).
-  a similar texture feature (wavelet 3D) was associated with overall survival and time to progression (44)
- tumor heterogeneity correlated with fluorodeoxyglucose (FDG) uptake, SUVmax, and SUVmean. Heterogeneity was greater in patients with clinical stage III or IV disease (entropy, uniformity) and was an independent predictor of survival.
- texture features including contrast, variance, and correlation allowed stratification of patients into favorable and unfavorable survival groups 
- multiple texture features (entropy, uniformity, kurtosis, skewness, standard deviation) were predictive of survival and independent of tumor stage. Colorectal tumors with lower entropy, lower kurtosis, and lower standard deviation (ie, more homogeneous tumors) had a poorer prognosis, which was somewhat counterintuitive and different from results of prior studies. 
- another study found similar results, with entropy and standard deviation negatively associated with tumor grade (more homogeneous tumors were more likely to be higher grade) and with entropy negatively associated with survival (47)
- Entropy was also directly correlated with patient survival, and patients with lower entropy (less heterogeneous liver) had poorer survival (49). 
- a five-node decision tree was 90% accurate in predicting KRAS mutation status, with positive skewness and low kurtosis significantly associated with the presence of a KRAS mutation
- increasing entropy and decreasing uniformity (increased tumor heterogeneity) were moderately correlated with SUVmean, a prognosticator of poor outcome in lung cancer.
- entropy, skewness, and mean gray-level intensity were significantly associated with 3-year overall survival (higher entropy, higher or more positive skewness, and higher mean gray-level intensity were associated with poorer prognosis)
- High MPP, low entropy, and low SUVmax were associated with favorable progression-free survival.  At multivariate analysis, entropy was the only independent prognostic factor for overall survival. 
- primary mass size, N stage, and primary mass entropy and skewness were independently associated with overall survival at multivariate analysis
- There were significant differences in 16 texture parameters (including five histogram features, three gray level co-occurrence matrix features, one gray level run-length feature, two gray-level gradient matrix  features, and five Law features) between the HPV-positive and HPV-negative tumors. 

### Response to  Therapy

CTTA features are associated with histopathologic features and clinical outcomes in a variety of primary and metastatic tumors. 

In general, a change in tumor heterogeneity (either increased or decreased) may be associated with treatment response and improved prognosis/outcome.

- Smith et al (19) studied 42 patients with melanoma being treated with antiangiogenic therapy. <u>Absolute change in MPP, change in tumor size, and baseline lactate dehydrogenase level were predictors of overall survival.</u> A prognostic index incorporating these three factors was highly accurate for predicting overall survival at 18 months (AUC = 0.91). 
- Goh et al (64) assessed 39 patients with metastatic RCC being treated with tyrosine kinase inhibitors and found that <u>entropy</u> decreased and <u>uniformity</u> increased as tumors were treated, suggesting decreasing heterogeneity. <u>Texture uniformity</u> was an independent predictor of time to progression. <u>Kaplan-Meier curves using a uniformity change threshold</u> performed better in stratifying patients without disease progression than standard response assessments. 
- A group of 20 patients being treated with antiangiogenic therapy and radiation therapy for soft-tissue sarcoma were evaluated with perfusion CT and CT texture features before and after treatment, and changes in blood flow and tumor heterogeneity were calculated. These quantitative
  imaging findings were correlated with histopathologic results at surgical resection. The <u>percentage change in MPP</u> after 8 weeks of therapy significantly correlated with tumor necrosis in the surgical specimen, while change in tumor size, attenuation alone, and blood flow did not (65).
- Similarly, another group evaluated 36 patients with esophageal cancer treated with neoadjuvant chemotherapy and radiation therapy before resection. Tumors with lower posttreatment <u>entropy</u> and higher posttreatment <u>uniformity</u> had improved survival time. Survival models that included texture features in addition to change in esophageal wall thickness performed better than those that included morphologic assessment alone (7,66).
- Use of texture to assess response to therapy has also shown some promise in lung, pancreas, and colorectal cancer (35,67–69).



 ## Nononcologic Applications of CTTA

## Challenges, Limitations, and Unknowns

## Future Directions and Clinical Implementation

## Conclusion

CTTA of tumor heterogeneity has shown promise in lesion characterization, pretreatment tumor assessment, and response evaluation for some tumor types. CTTA may also have a spectrum of potential nononcologic applications including assessment of hepatic and pulmonary fibrosis. A variety of challenges, including standardization of segmentation/measurement, postprocessing (eg, use of image filtration methods), and reporting as well as ongoing delineation of pathologic correlates, need to be resolved before  widespread implementation.