---
layout: post
title: Terminology
---

This document records some terminologies I have encountered. The interpretations come from the Internet (e.g. Wikipedia). 

## Heuristics

**启发法**（*heuristics*，源自古希腊语的εὑρίσκω，又译作：策略法、助发现法、启发力、捷思法、拍脑袋）是指依据有限的知识（或“不完整的信息”）在短时间内找到问题解决方案的一种技术。

它是一种依据**关于系统的有限认知**和[假说](https://zh.wikipedia.org/wiki/假说)从而得到关于此系统的结论的分析行为。由此得到的解决方案有可能会偏离最佳方案。通过与最佳方案的对比，可以确保启发法的质量。

典型的启发法有[试错法](https://zh.wikipedia.org/wiki/试错)和排除法。

鉴于启发法基于经验，有时它也可能是基于错误的经验（如感知偏离和[伪关系](https://zh.wikipedia.org/wiki/偽關係)）。

## Contingency table

In [statistics](https://en.wikipedia.org/wiki/Statistics), a **contingency table** (also known as a **cross tabulation** or **crosstab**) is a type of [table](https://en.wikipedia.org/wiki/Table_(information)) in a [matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)) format that displays the (multivariate) [frequency distribution](https://en.wikipedia.org/wiki/Frequency_distribution) of the variables. They provide a basic picture of the interrelation between two variables and can help find interactions between them. 

## Confusion matrix

In the field of [machine learning](https://en.wikipedia.org/wiki/Machine_learning) and specifically the problem of [statistical classification](https://en.wikipedia.org/wiki/Statistical_classification), a **confusion matrix**, also known as an error matrix, is a specific table layout that allows visualization of the performance of an algorithm, typically a [supervised learning](https://en.wikipedia.org/wiki/Supervised_learning) one (in [unsupervised learning](https://en.wikipedia.org/wiki/Unsupervised_learning) it is usually called a **matching matrix**). Each row of the [matrix](https://en.wikipedia.org/wiki/Matrix_(mathematics)) represents the instances in a predicted class while each column represents the instances in an actual class (or vice versa). The name stems from the fact that it makes it easy to see if the system is confusing two classes.

It is a special kind of [contingency table](https://en.wikipedia.org/wiki/Contingency_table), with two dimensions ("actual" and "predicted"), and identical sets of "classes" in both dimensions (each combination of dimension and class is a variable in the contingency table).

An example confusion matrix could look like the table below:

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 6px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 6px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-t4zm{font-size:16px;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-72fj{font-weight:bold;font-size:16px;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-iv4k{font-weight:bold;font-size:16px;font-family:serif !important;;background-color:#c0c0c0;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-adxj{font-weight:bold;font-size:16px;background-color:#efefef;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-m9t7{font-weight:bold;font-size:16px;background-color:#c0c0c0;border-color:inherit;text-align:center;vertical-align:middle}
</style>
<table class="tg">
  <tr>
    <th class="tg-7btt" colspan="2" rowspan="2"></th>
    <th class="tg-zlqz" colspan="2">Actual class</th>
  </tr>
  <tr>
    <td class="tg-v0hj">Cat</td>
    <td class="tg-v0hj">Dog</td>
  </tr>
  <tr>
    <td class="tg-zlqz" rowspan="2">Predicted<br>class</td>
    <td class="tg-v0hj">Cat</td>
    <td class="tg-7btt">5</td>
    <td class="tg-c3ow">2</td>
  </tr>
  <tr>
    <td class="tg-v0hj">Dog</td>
    <td class="tg-c3ow">3</td>
    <td class="tg-7btt">3</td>
  </tr>
</table>

## Table of confusion

In [predictive analytics](https://en.wikipedia.org/wiki/Predictive_analytics), a **table of confusion** (sometimes also called a **confusion matrix**), is a table with two rows and two columns that reports the number of *false positives*, *false negatives*, *true positives*, and *true negatives*. This allows more detailed analysis than mere proportion of correct classifications (accuracy). Accuracy is not a reliable metric for the real performance of a classifier, because it will yield misleading results if the data set is unbalanced (that is, when the numbers of observations in different classes vary greatly). 

Assuming the confusion matrix above, its corresponding table of confusion, for the cat class, would be: 

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 6px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 6px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-t4zm{font-size:16px;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-72fj{font-weight:bold;font-size:16px;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-iv4k{font-weight:bold;font-size:16px;font-family:serif !important;;background-color:#c0c0c0;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-adxj{font-weight:bold;font-size:16px;background-color:#efefef;border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-m9t7{font-weight:bold;font-size:16px;background-color:#c0c0c0;border-color:inherit;text-align:center;vertical-align:middle}
</style>
<table class="tg">
  <tr>
    <th class="tg-72fj" colspan="2" rowspan="2"></th>
    <th class="tg-iv4k" colspan="2">Actual class</th>
  </tr>
  <tr>
    <td class="tg-adxj">Cat</td>
    <td class="tg-adxj">Non-cat</td>
  </tr>
  <tr>
    <td class="tg-m9t7" rowspan="2">Predicted<br>class</td>
    <td class="tg-adxj">Cat</td>
    <td class="tg-t4zm">5 TP</td>
    <td class="tg-t4zm">2 FP</td>
  </tr>
  <tr>
    <td class="tg-adxj">Non-cat</td>
    <td class="tg-t4zm">3 FN</td>
    <td class="tg-t4zm">3 TN</td>
  </tr>
</table>

The final table of confusion would contain the average values for all classes combined.

## Terminology and derivations from a confusion matrix

A classification model ([classifier](https://en.wikipedia.org/wiki/Classifier_(mathematics)) or [diagnosis](https://en.wikipedia.org/wiki/Medical_diagnosis)) is a [mapping](https://en.wikipedia.org/wiki/Mapping_(mathematics)) of instances between certain classes/groups. The classifier or diagnosis result can be a [real value](https://en.wikipedia.org/wiki/Real_number) (continuous output), in which case the classifier boundary between classes must be determined by a threshold value (for instance, to determine whether a person has [hypertension](https://en.wikipedia.org/wiki/Hypertension) based on a [blood pressure](https://en.wikipedia.org/wiki/Blood_pressure) measure). Or it can be a [discrete](https://en.wikipedia.org/wiki/Countable_set) class label, indicating one of the classes.

Consider a two-class prediction problem ([binary classification](https://en.wikipedia.org/wiki/Binary_classification)), in which the outcomes are labeled either as positive (*p*) or negative (*n*). There are four possible outcomes from a binary classifier. If the outcome from a prediction is *p* and the actual value is also *p*, then it is called a *true positive* (TP); however if the actual value is *n* then it is said to be a *false positive* (FP). Conversely, a *true negative* (TN) has occurred when both the prediction outcome and the actual value are *n*, and *false negative* (FN) is when the prediction outcome is *n* while the actual value is *p*.

To get an appropriate example in a real-world problem, consider a diagnostic test that seeks to determine whether a person has a certain disease. A false positive in this case occurs when the person tests positive, but does not actually have the disease. A false negative, on the other hand, occurs when the person tests negative, suggesting they are healthy, when they actually do have the disease.

- **condition positive (P)**: the number of real positive cases in the data 
- **condition negative (N)**: the number of real negative cases in the data
- **true positive (TP)**: eqv. with hit
- **true negative (TN)**: eqv. with correct rejection
- **false positive (FP)**: eqv. with [false alarm](https://en.wikipedia.org/wiki/False_alarm), [Type I error](https://en.wikipedia.org/wiki/Type_I_error)
- **false negative (FN)**: eqv. with miss, [Type II error](https://en.wikipedia.org/wiki/Type_II_error)

Let us define an experiment from **P** positive instances and **N** negative instances for some condition. The four outcomes can be formulated in a 2×2 *contingency table* or *confusion matrix*, as follows:

![](../img/2019-08-02/Terminology-and-derivations-from-a-confusion-matrix.png)

There are many metrics that can be used to measure the performance of a classifier or predictor; different fields have different preferences for specific metrics due to different goals. In diagnostic testing, the main ratios used are the true column ratios – True Positive Rate and True Negative Rate – where they are known as [sensitivity and specificity](https://en.wikipedia.org/wiki/Sensitivity_and_specificity). In informational retrieval, the main ratios are the true positive ratios (row and column) – Positive Predictive Value and True Positive Rate – where they are known as [precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).

There are eight basic ratios that one can compute from this table, which come in four complementary pairs (each pair summing to 1). These are obtained by dividing each of the four numbers by the sum of its row or column, yielding eight numbers, which can be referred to generically in the form "true positive row ratio" or "false negative column ratio", though there are conventional terms. There are thus two pairs of column ratios and two pairs of row ratios, and one can summarize these with four numbers by choosing one ratio from each pair – the other four numbers are the complements.

The column ratios are [True Positive Rate](https://en.wikipedia.org/wiki/True_Positive_Rate) (TPR, aka **Sensitivity** or [recall](https://en.wikipedia.org/wiki/Recall_(information_retrieval))) (TP/(TP+FN)), with complement the [False Negative Rate](https://en.wikipedia.org/wiki/False_Negative_Rate) (FNR) (FN/(TP+FN)); and [True Negative Rate](https://en.wikipedia.org/wiki/True_Negative_Rate) (TNR, aka **Specificity,** SPC) (TN/(TN+FP)), with complement [False Positive Rate](https://en.wikipedia.org/wiki/False_Positive_Rate) (FPR) (FP/(TN+FP)). These are the proportion of the *population with the condition* (resp., without the condition) for which the test is correct (or, complementarily, for which the test is incorrect); these are independent of prevalence.

The row ratios are [Positive Predictive Value](https://en.wikipedia.org/wiki/Positive_Predictive_Value) (PPV, aka [precision](https://en.wikipedia.org/wiki/Precision_(information_retrieval))) (TP/(TP+FP)), with complement the [False Discovery Rate](https://en.wikipedia.org/wiki/False_Discovery_Rate) (FDR) (FP/(TP+FP)); and [Negative Predictive Value](https://en.wikipedia.org/wiki/Negative_Predictive_Value) (NPV) (TN/(TN+FN)), with complement the [False Omission Rate](https://en.wikipedia.org/w/index.php?title=False_Omission_Rate&action=edit&redlink=1) (FOR) (FN/(TN+FN)). These are the proportion of the *population with a given test result* for which the test is correct (or, complementarily, for which the test is incorrect); these depend on prevalence.

- **[true positive rate](https://en.wikipedia.org/wiki/Sensitivity_(test)) (TPR)**: eqv. with [sensitivity](https://en.wikipedia.org/wiki/Sensitivity_(test)), [recall](https://en.wikipedia.org/wiki/Precision_and_recall#Recall), [hit rate](https://en.wikipedia.org/wiki/Hit_rate)

$$ TPR = \frac{TP}{P} = \frac{TP}{TP + FN} = 1 - FNR $$

- **[true negative rate](https://en.wikipedia.org/wiki/Specificity_(tests)) (TNR)**: eqv. with [specificity](https://en.wikipedia.org/wiki/Specificity_(tests)), [selectivity](https://en.wikipedia.org/wiki/Specificity_(tests))

\begin{equation}
TNR = \frac{TN}{N} = \frac{TN}{TN + FP} = 1 - FPR 
\end{equation}

- **[false positive rate](https://en.wikipedia.org/wiki/Information_retrieval#Fall-out) (FPR)**: eqv. with [fall-out](https://en.wikipedia.org/wiki/Information_retrieval#Fall-out) (误检率)

\$\$ FPR = \frac{FP}{N} = \frac{FP}{FP + TN} = 1 - TNR \$\$

- **[false negative rate](https://en.wikipedia.org/wiki/Type_I_and_type_II_errors#False_positive_and_false_negative_rates) (FNR)**: eqv. with miss rate

\[
FNR = \frac{FN}{P} = \frac{FN}{FN + TP} = 1 - TPR
\]

- **[positive predictive value](https://en.wikipedia.org/wiki/Positive_predictive_value) (PPV)**: [precision](https://en.wikipedia.org/wiki/Information_retrieval#Precision)

$$ PPV = \frac{TP}{TP + FP} = 1 - FDR $$

- **[negative predictive value](https://en.wikipedia.org/wiki/Negative_predictive_value) (NPV)**: 

$$
NPV = \frac{TN}{TN + FN} = 1 - FOR
$$

- **[false discovery rate](https://en.wikipedia.org/wiki/False_discovery_rate) (FDR)**: 

\$\$ FDR = \frac{FP}{FP + TP} = 1 - PPV \$\$

- **[false omission rate](https://en.wikipedia.org/wiki/Positive_and_negative_predictive_values) (FOR)**: 

\$\$ FOR = \frac{FN}{FN + TN} = 1 - NPV \$\$

One can take ratios of a complementary pair of ratios, yielding four [likelihood ratios](https://en.wikipedia.org/wiki/Likelihood_ratios_in_diagnostic_testing) (two column ratio of ratios, two row ratio of ratios). This is primarily done for the column (condition) ratios, yielding [likelihood ratios in diagnostic testing](https://en.wikipedia.org/wiki/Likelihood_ratios_in_diagnostic_testing). Taking the ratio of one of these groups of ratios yields a final ratio, the [diagnostic odds ratio](https://en.wikipedia.org/wiki/Diagnostic_odds_ratio) (DOR). This can also be defined directly as (TP×TN)/(FP×FN) = (TP/FN)/(FP/TN); this has a useful interpretation – as an [odds ratio](https://en.wikipedia.org/wiki/Odds_ratio) – and is prevalence-independent.

There are a number of other metrics, most simply the [accuracy](https://en.wikipedia.org/wiki/Accuracy_and_precision#In_binary_classification) or Fraction Correct (FC), which measures the fraction of all instances that are correctly categorized; the complement is the Fraction Incorrect (FiC). The [F-score](https://en.wikipedia.org/wiki/F-score) combines precision and recall into one number via a choice of weighing, most simply equal weighing, as the balanced F-score ([F1 score](https://en.wikipedia.org/wiki/F1_score)). Some metrics come from [regression coefficients](https://en.wikipedia.org/wiki/Regression_coefficient): the [markedness](https://en.wikipedia.org/wiki/Markedness) and the [informedness](https://en.wikipedia.org/wiki/Informedness), and their [geometric mean](https://en.wikipedia.org/wiki/Geometric_mean), the [Matthews correlation coefficient](https://en.wikipedia.org/wiki/Matthews_correlation_coefficient). Other metrics include [Youden's J statistic](https://en.wikipedia.org/wiki/Youden's_J_statistic), the [uncertainty coefficient](https://en.wikipedia.org/wiki/Uncertainty_coefficient), the Phi coefficient, and Cohen's kappa.

- **Threat score (TS) or Critical Success Index (CSI)**

\$\$ TS = \frac{TP}{TP + FN + FP} \$\$

- **[accuracy](https://en.wikipedia.org/wiki/Accuracy) (ACC)**: 

\$\$ ACC = \frac{TP + TN}{P + N} = \frac{TP + TN}{TP + TN + FP + FN} \$\$

- **[F1 score](https://en.wikipedia.org/wiki/F1_score)**: is the [harmonic mean](https://en.wikipedia.org/wiki/Harmonic_mean#Harmonic_mean_of_two_numbers) of [precision](https://en.wikipedia.org/wiki/Information_retrieval#Precision) and [sensitivity](https://en.wikipedia.org/wiki/Sensitivity_(test))

\$\$ F_1 = \frac{2}{\frac{1}{PPV} + \frac{1}{TPR}} = 2 \cdot \frac{PPV \cdot TPR}{PPV + TPR} = \frac{2TP}{2TP + FP + FN} \$\$

- **[Matthews correlation coefficient](https://en.wikipedia.org/wiki/Matthews_correlation_coefficient) (MCC)**: 

\$\$ MCC = \frac{TP \times TN - FP \times FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}} \$\$

- **[Informedness](https://en.wikipedia.org/wiki/Informedness) or Bookmaker Informedness (BM)**: 

\$\$ BM = TPR + TNR - 1 = \frac{TP}{P} - \frac{FP}{N} \$\$

Informedness is a measure of how informed the system is about both real positives and real negatives. Informedness is counterpart of recall and its values range from -1 thru +1 (both inclusive), while the values of recall range from 0 thru +1 (both inclusive). Informedness of +1 implies every positive will be identified as positive (TP=RP) and every negative will be identified as negative (FP=0) while informedness of -1 implies every positive will be incorrectly identified as negative (TP=0) and every negative will be incorrectly identified as positive (FP=RN). An informed yet incorrect system can be easily flipped to be an informed and correct system (to the same extent as it was incorrect). 

- **Markedness (MK)**: 

\$\$ MK = PPV + NPV - 1 = \frac{TP}{PP} - \frac{FN}{PN} \$\$

Note: PP (predicted positive) is the sum of TP and FP. Similarly, PN (predicted negative) is the sum of TN and FN.

Markedness is a measure of trustworthiness of positive and negative predictions by the system. Markedness is counterpart of precision and its values range from -1 thru +1 (both inclusive), while the values of precision range from 0 thru +1 (both inclusive). Markedness of +1 implies every positive prediction (TP=PP) and negative prediction (FN=0) will be correct while markedness of -1 implies every positive prediction (TP=0) and negative prediction (FN=PN) will be incorrect. Similarly, a marked yet incorrect system can be easily flipped to be an marked and correct system (to the same extent as it was incorrect). 

Consequently, in terms of informedness and markedness, a bad system is one with measures that are close to 0, i.e., it is no better than chance.

## Null hypothesis

In [inferential statistics](https://en.wikipedia.org/wiki/Inferential_statistics), the **null hypothesis** is a general statement or default position that there is nothing new happening, like there is no relationship between two measured phenomena, or no association among groups. The null hypothesis is generally assumed to be true until evidence indicates otherwise. In statistics, it is often denoted $H_0$, with the subscript being the digit 0.

Testing (accepting, approving, rejecting, or disproving) the null [hypothesis](https://en.wikipedia.org/wiki/Hypothesis)—and thus concluding that there are or are not grounds for believing that there is a relationship between two phenomena (e.g. that a potential treatment has a measurable effect)—is a central task in the modern practice of science; the field of statistics gives precise criteria for rejecting a null hypothesis.

The concept of a null hypothesis is used differently in two approaches to statistical inference. 

- In the significance testing approach of [Ronald Fisher](https://en.wikipedia.org/wiki/Ronald_Fisher), a null hypothesis is rejected if the observed data are [significantly](https://en.wikipedia.org/wiki/Statistical_significance) unlikely to have occurred if the null hypothesis were true. In this case, the null hypothesis is rejected and an [alternative hypothesis](https://en.wikipedia.org/wiki/Alternative_hypothesis) is accepted in its place. If the data are consistent with the null hypothesis, then the null hypothesis is not rejected. In neither case is the null hypothesis or its alternative proven; the null hypothesis is tested with data and a decision is made based on how likely or unlikely the data are. This is analogous to the legal principle of [presumption of innocence](https://en.wikipedia.org/wiki/Presumption_of_innocence), in which a suspect or defendant is assumed to be innocent (null is not rejected) until proven guilty (null is rejected) beyond a reasonable doubt (to a statistically significant degree). 
- In the [hypothesis testing](https://en.wikipedia.org/wiki/Statistical_hypothesis_testing) approach of [Jerzy Neyman](https://en.wikipedia.org/wiki/Jerzy_Neyman) and [Egon Pearson](https://en.wikipedia.org/wiki/Egon_Pearson), a null hypothesis is contrasted with an [alternative hypothesis](https://en.wikipedia.org/wiki/Alternative_hypothesis) and the two hypotheses are distinguished on the basis of data, with certain error rates. It is used in formulating answers in researches.

Statistical inference can be done without a null hypothesis, by specifying a [statistical model](https://en.wikipedia.org/wiki/Statistical_model) corresponding to each candidate hypothesis and using [model selection](https://en.wikipedia.org/wiki/Model_selection) techniques to choose the most appropriate model.

## Type I and type II errors

In [statistical hypothesis testing](https://en.wikipedia.org/wiki/Statistical_hypothesis_testing) a **type I error** is the rejection of a true null hypothesis, while a **type II error** is the non-rejection of a false null hypothesis. Much of statistical theory revolves around the minimization of one or both of these errors, though the complete elimination of either is treated as a statistical impossibility.

In [statistics](https://en.wikipedia.org/wiki/Statistics), a [null hypothesis](https://en.wikipedia.org/wiki/Null_hypothesis) is a statement that one seeks to nullify (that is, to conclude is incorrect) with evidence to the contrary. Most commonly, it is presented as a statement that the phenomenon being studied produces no effect or makes no difference. An experimenter usually frames a null hypothesis with the intent of rejecting it: that is, intending to run an experiment which produces data that shows that the phenomenon under study does indeed make a difference.

- A *type I error* (or *error of the first kind*) is the incorrect rejection of a true null hypothesis. Usually a type I error leads to the conclusion that a supposed effect or relationship exists when in fact it does not. Examples of type I errors include a test that shows a patient to have a disease when in fact the patient does not have the disease, a fire alarm going on indicating a fire when in fact there is no fire, or an experiment indicating that a medical treatment should cure a disease when in fact it does not.
- A *type II error* (or *error of the second kind*) is the failure to reject a false null hypothesis. Some examples of type II errors are a blood test failing to detect the disease it was designed to detect, in a patient who really has the disease; a fire breaking out and the fire alarm does not ring; or a clinical trial of a medical treatment failing to show that the treatment works when really it does.

In terms of [false positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives), a positive result corresponds to rejecting the null hypothesis, while a negative result corresponds to failing to reject the null hypothesis; "false" means the conclusion drawn is incorrect. Thus a type I error is a false positive, and a type II error is a false negative.

## Receiver operating characteristic (ROC)

A **receiver operating characteristic curve**, or **ROC curve**, is a [graphical plot](https://en.wikipedia.org/wiki/Graph_of_a_function) that illustrates the diagnostic ability of a [binary classifier](https://en.wikipedia.org/wiki/Binary_classifier) system as its discrimination threshold is varied.

The ROC curve is created by plotting the [true positive rate](https://en.wikipedia.org/wiki/True_positive_rate) (TPR) against the [false positive rate](https://en.wikipedia.org/wiki/False_positive_rate) (FPR) at various threshold settings. The true-positive rate is also known as [sensitivity](https://en.wikipedia.org/wiki/Sensitivity_(tests)), [recall](https://en.wikipedia.org/wiki/Precision_and_recall#Definition_(classification_context)) or *probability of detection*. The ROC curve is thus the sensitivity as a function of [fall-out](https://en.wikipedia.org/wiki/Information_retrieval#Fall-out).

ROC analysis provides tools to select possibly optimal models and to discard suboptimal ones independently from (and prior to specifying) the cost context or the class distribution. ROC analysis is related in a direct and natural way to cost/benefit analysis of diagnostic [decision making](https://en.wikipedia.org/wiki/Decision_making).

The ROC is also known as a relative operating characteristic curve, because it is a comparison of two operating characteristics (TPR and FPR) as the criterion changes.

### ROC space

An ROC space is defined by FPR and TPR as *x* and *y* axes, respectively, which depicts relative trade-offs between true positive (benefits) and false positive (costs). Since TPR is equivalent to sensitivity and FPR is equal to 1 − specificity, the ROC graph is sometimes called the sensitivity vs (1 − specificity) plot. Each prediction result or instance of a [confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) represents one point in the ROC space.

The best possible prediction method would yield a point in the upper left corner or coordinate (0,1) of the ROC space, representing 100% sensitivity (no false negatives) and 100% specificity (no false positives). The (0,1) point is also called a *perfect classification*. A random guess would give a point along a diagonal line (the so-called *line of no-discrimination*) from the left bottom to the top right corners (regardless of the positive and negative [base rates](https://en.wikipedia.org/wiki/Base_rate)). An intuitive example of random guessing is a decision by flipping coins. As the size of the sample increases, a random classifier's ROC point tends towards the diagonal line. In the case of a balanced coin, it will tend to the point (0.5, 0.5).

The diagonal divides the ROC space. Points above the diagonal represent good classification results (better than random); points below the line represent bad results (worse than random). Note that the output of a consistently bad predictor could simply be inverted to obtain a good predictor.

### Area under the curve

When using normalized units, the area under the curve (often referred to as simply the AUC) is equal to the probability that a classifier will rank a randomly chosen positive instance higher than a randomly chosen negative one (assuming 'positive' ranks higher than 'negative').0