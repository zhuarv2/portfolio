export interface ResearchProject {
  id: string;
  number: string;
  title: string;
  field: string;
  competition: string;
  team: string;
  applicationId: string;
  summary: string;
  question: string;
  abstract: string;
  problemStatement: string;
  methodology: string;
  dataset: string;
  datasetDetails: {
    name: string;
    size: string;
    split: string;
    sampling?: string;
  };
  preprocessing: string[];
  model: string;
  modelArchitectureDetails: string[];
  hyperparameters: { [key: string]: string };
  evaluationMetrics: string[];
  results: {
    highlight: string;
    table?: { label: string; precision?: string; recall?: string; f1OrIou: string }[];
    summary: string;
  };
  discussionAndLimitations: string[];
  contribution: string;
  futureWork: string[];
  status: string;
  tags: string[];
  pdfFile: string;
  codeUrl: string | null;
  references: string[];
}

export const personal = {
  name: 'Farouq Hafizhuddin',
  initials: 'FH',
  avatar: './farouq-pfp.jpeg',
  role: 'High School Student · Aspiring ML Researcher',
  location: 'Kayseri, Türkiye',
  school: 'Uluslararası Kayseri İlahiyat Vakfı Anadolu İHL',
  scholarship: 'TDV Scholarship Recipient',
  email: 'hafizhuddinfarouq@gmail.com',
  github: 'https://github.com/zhuarv2',
  linkedin: 'https://www.linkedin.com/in/farouq-hafizhuddin-4ba223279/',
};

export const research: ResearchProject[] = [
  {
    id: 'polyp-segmentation',
    number: '01',
    title: 'Polyp Segmentation in Colonoscopy Images via ResUNet++',
    field: 'Biomedical Image Segmentation · Computer Vision',
    competition: 'TEKNOFEST Havacılık, Uzay ve Teknoloji Festivali — Sağlıkta Yapay Zeka',
    team: 'ChatGPTree',
    applicationId: '3321623',
    summary:
      'Investigated deep learning architectures for colorectal polyp segmentation in colonoscopy imagery, identifying optimal encoder-decoder configurations and attention mechanisms for constrained biomedical datasets.',
    question:
      'Which CNN-based encoder-decoder architecture and attention mechanisms yield superior segmentation accuracy and boundary delineation on small colonoscopy image benchmarks?',
    abstract:
      'Colorectal cancer screening relies heavily on early polyp identification during colonoscopy. Automated biomedical segmentation faces hurdles from small dataset scales, variable polyp morphology, and complex mucosal backgrounds. In this study, we benchmarked multiple architectures (U-Net, GAN-based models, TransFuse, Mask R-CNN, and DeepLabV3+) on the CVC-ClinicDB benchmark, identifying ResUNet++ as the premier architecture with an enhanced ResNet encoder, Squeeze-and-Excitation channel attention, Atrous Spatial Pyramid Pooling (ASPP), and spatial attention units.',
    problemStatement:
      'Detecting colorectal polyps in endoscopic imagery is critical for early diagnosis, but automated systems struggle with high mucosal variability, varied polyp sizes, and a scarcity of large annotated clinical datasets. Generic segmentation networks often lose fine spatial boundary details or overfit small datasets.',
    methodology:
      'Implemented ResUNet++ with a ResNet backbone encoder to mitigate degradation problems in deep networks while capturing multi-scale context via ASPP and filtering background mucosal noise via Squeeze-and-Excitation (SE) and Attention blocks. Trained on CVC-ClinicDB using PyTorch, Albumentations, and OpenCV with 80:20 cross-validation.',
    dataset: 'CVC-ClinicDB (612 high-resolution colonoscopy images, 384×288 px)',
    datasetDetails: {
      name: 'CVC-ClinicDB (Bernal et al., 2015)',
      size: '612 annotated colonoscopy frames (384×288 pixels)',
      split: '80% Training (490 images) / 20% Validation (122 images)',
    },
    preprocessing: [
      'Geometric augmentations: Horizontal/vertical flips, rotations, elastic/grid/optical deformations',
      'Photometric adjustments: Brightness/contrast shifts, hue/saturation adjustments, CLAHE, gamma correction',
      'Regularization: CoarseDropout and RandomResizedCrop to prevent overfitting',
      'Dataset-specific channel normalization: Custom mean and standard deviation computed across training frames',
    ],
    model: 'ResUNet++ (ResNet Encoder, SE Units, ASPP, Attention Blocks)',
    modelArchitectureDetails: [
      'Encoder: ResNet-based residual blocks preserving gradient flow while reducing computational burden on small datasets (<1,000 samples)',
      'Squeeze-and-Excitation (SE) Units: Adaptively recalibrate channel-wise feature responses by modeling interdependencies',
      'Atrous Spatial Pyramid Pooling (ASPP): Multi-scale contextual capture through parallel dilated convolutions with varying dilation rates',
      'Attention Units: Focus feature activations onto polyp regions while suppressing non-informative mucosal background',
      'Skip Connections: Direct transfer of low-level spatial details from encoder to decoder',
    ],
    hyperparameters: {
      'Batch Size': '16',
      'Learning Rate': '5e-5',
      'Weight Decay': '1e-4',
      'Optimizer': 'AdamW',
      'Framework': 'PyTorch & Albumentations',
      'Environment': 'Google Colab & Kaggle GPU',
    },
    evaluationMetrics: ['Validation Intersection-over-Union (IoU)', 'Training & Validation Loss curves'],
    results: {
      highlight: 'Validation IoU reached 90.27%, outperforming AttentionU-Net (88.40%) and baseline ResU-Net.',
      table: [
        { label: 'ResUNet++ (Our Final Model)', f1OrIou: '90.27% IoU' },
        { label: 'AttentionU-Net', f1OrIou: '88.40% IoU' },
        { label: 'DeepLabV3+ (Benchmark reference)', f1OrIou: '89.00% IoU' },
        { label: 'TransFuse (Benchmark reference)', f1OrIou: '86.80% IoU' },
        { label: 'Mask R-CNN ResNet50 (Benchmark reference)', f1OrIou: '63.90% IoU' },
      ],
      summary:
        'ResUNet++ achieved the optimal equilibrium between contextual representation and edge sensitivity. While EfficientNetB4 demonstrated lower absolute loss minimization, ResUNet++ proved superior in generalization and boundary precision on the validation set.',
    },
    discussionAndLimitations: [
      'The multi-scale ASPP module effectively detected both diminutive and expansive polyps without necessitating image resampling or cropping.',
      'Small dataset size (612 frames) makes the model vulnerable to domain shifts when tested on different endoscopic camera hardware.',
      'Computationally heavier than vanilla U-Net, requiring GPU acceleration for real-time video inference.',
    ],
    contribution:
      'Collaborated on architectural comparative analysis, structured the Albumentations data augmentation and normalization pipeline, conducted hyperparameter tuning runs, and generated validation IoU evaluations.',
    futureWork: [
      'Evaluate generalization across multi-center datasets (such as Kvasir-SEG and BKAI-IGH)',
      'Quantize and prune the model for real-time edge deployment on embedded endoscopic processor carts',
    ],
    status: 'TEKNOFEST 2024 AI in Health Critical Design Report (KRİTİK TASARIM RAPORU)',
    tags: ['Medical Imaging', 'Semantic Segmentation', 'ResUNet++', 'CVC-ClinicDB', 'PyTorch'],
    pdfFile: './research-papers/research1.pdf',
    codeUrl: null,
    references: [
      'Bernal et al. (2015). WM-DOVA Maps for Accurate Polyp Highlighting in Colonoscopy Videos. CMIG.',
      'Jha et al. (2019). ResUNet++: An Advanced Architecture for Medical Image Segmentation. IEEE ISM.',
      'Ronneberger et al. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation. MICCAI.',
      'Chen et al. (2018). Encoder-Decoder with Atrous Separable Convolution for Semantic Image Segmentation. ECCV.',
    ],
  },
  {
    id: 'ctr-regression',
    number: '02',
    title: 'Automated Cardiothoracic Ratio Calculation from Chest Radiographs via CNN Regression',
    field: 'Medical Imaging · Anatomical Landmark Regression',
    competition: 'TEKNOFEST Aerospace and Technology Festival — AI in Health',
    team: 'ChatGPTree',
    applicationId: '3321623',
    summary:
      'Engineered an edge-capable MobileNetV2 regression model to estimate the Cardiothoracic Ratio (CTR) from chest X-rays by directly predicting 12 continuous anatomical landmark coordinates, facilitating automated cardiomegaly triage.',
    question:
      'Can a lightweight depthwise-separable CNN accurately regress 2D anatomical coordinates on small clinical radiograph datasets to compute CTR without heavy manual segmentation masks?',
    abstract:
      'Cardiothoracic Ratio (CTR) evaluates cardiac enlargement (cardiomegaly) by calculating the ratio between the maximum transverse cardiac diameter (A + B) and the internal thoracic diameter (C). Instead of computationally burdensome pixel-level segmentation, this work formulates CTR assessment as a lightweight landmark regression problem. We fine-tuned MobileNetV2 with inverted residual blocks to output 12 continuous values representing 6 anatomical landmark pairs, incorporating SmoothL1Loss and AdamW optimization.',
    problemStatement:
      'Cardiomegaly is a key indicator of cardiovascular conditions (CTR > 50% in adults indicates pathology). Manual landmark measurement by radiologists is time-consuming and subjective. High-capacity segmentation models are computationally prohibitive on low-resource clinical workstations.',
    methodology:
      'Employed MobileNetV2 featuring inverted residual bottlenecks and linear projection layers. Replaced the classification head with a 12-dimensional continuous regression layer. Applied SmoothL1Loss to guard against annotation outlier noise. Utilized transfer learning and scaled ground truth coordinates proportionally to 224×224 normalized inputs, de-normalizing predictions during inference.',
    dataset: 'TEKNOFEST Chest X-Ray Benchmark (102 curated radiographs with 6 anatomical landmark annotations)',
    datasetDetails: {
      name: 'TEKNOFEST Official Health AI Radiograph Dataset',
      size: '102 raw frontal chest X-ray radiographs with coordinate ground truth',
      split: '80% Training (82 images) / 20% Validation (20 images)',
      sampling: 'Standardized to 224×224 pixels with coordinate proportional remapping',
    },
    preprocessing: [
      'Proportional coordinate rescaling to match the 224×224 pixel input grid',
      'Coordinate normalization: Computed mean and standard deviation of landmark coordinates within the training loop to match loss gradients',
      'Geometric transformations: Mild translation and rotation preserving landmark integrity',
      'Photometric transformations: Contrast, brightness, CLAHE, Gaussian noise, and Gaussian blur for cardiac boundary enhancement',
      'Regularization: CoarseDropout removing random rectangular patches to enforce landmark contextual robustness',
      'ImageNet color normalization: RGB mean [0.485, 0.456, 0.406] and std [0.229, 0.224, 0.225]',
    ],
    model: 'MobileNetV2 Regression (Inverted Residuals, Linear Bottlenecks, SmoothL1Loss Head)',
    modelArchitectureDetails: [
      'Depthwise Separable Convolutions: Splits spatial filtering from channel combining, reducing parameters by ~8-9×',
      'Inverted Residual Blocks: Narrow → Wide → Narrow channel expansion and projection with residual skip connections',
      'Linear Bottlenecks: Prevents non-linear ReLU activations from destroying spatial coordinate features in compact feature maps',
      'Regression Head: Linear projection layer predicting 12 continuous values representing 6 landmark coordinate pairs',
    ],
    hyperparameters: {
      'Batch Size': '8',
      'Initial Learning Rate': '1e-5 (tuned to 1e-4 for stable convergence)',
      'Epochs': '95 epochs',
      'Loss Function': 'Smooth L1 Loss (Huber Loss variant)',
      'Optimizer': 'AdamW (decoupled weight decay)',
      'Input Dimensions': '224 × 224 × 3',
    },
    evaluationMetrics: ['Smooth L1 Loss', '1-MAPE (Mean Absolute Percentage Error accuracy for CTR)', 'F1 Score for Cardiomegaly classification (>50% CTR threshold)'],
    results: {
      highlight: 'Demonstrated rapid coordinate convergence on 102 radiographs using transfer learning and AdamW, overcoming severe sample sparsity.',
      table: [
        { label: 'Architecture', f1OrIou: 'MobileNetV2 Regression' },
        { label: 'Loss Objective', f1OrIou: 'Smooth L1 Loss' },
        { label: 'Diagnostic Metric', f1OrIou: 'F1 Score (CTR > 50%) & 1-MAPE' },
        { label: 'Inference Efficiency', f1OrIou: '~8-9× parameter reduction vs standard CNN' },
      ],
      summary:
        'Smooth L1 Loss effectively mitigated coordinate annotation noise. Tuning the learning rate to 1e-4 and adopting AdamW resolved initial slow convergence and prevented overfitting across the 95 training epochs.',
    },
    discussionAndLimitations: [
      'Direct landmark regression is dramatically faster and less memory-intensive than semantic segmentation for CTR calculation.',
      'Extreme dataset sparsity (102 images) required heavy transfer learning and careful regularization to prevent overfitting.',
      'Performance relies on consistent frontal patient posture; severe scoliosis or rotated exposures require additional pose normalization.',
    ],
    contribution:
      'Implemented the landmark coordinate normalization and de-normalization logic in PyTorch, set up the data augmentation pipeline, tuned hyperparameter schedules (evaluating SGD, Adam, and AdamW), and visualized ground-truth vs. predicted landmarks.',
    futureWork: [
      'Expand training onto public large-scale datasets such as MIMIC-CXR and CheXpert',
      'Incorporate an automated quality-assurance filter to discard improperly rotated or underexposed chest radiographs',
    ],
    status: 'TEKNOFEST 2024 AI in Health Critical Report (KRİTİK TASARIM RAPORU)',
    tags: ['Chest X-Ray', 'Landmark Regression', 'MobileNetV2', 'Cardiothoracic Ratio', 'Transfer Learning'],
    pdfFile: './research-papers/research2.pdf',
    codeUrl: null,
    references: [
      'Sandler et al. (2018). MobileNetV2: Inverted Residuals and Linear Bottlenecks. CVPR.',
      'Alghamdi et al. (2020). Study of Cardiomegaly Using Chest X-ray. JRRAS.',
      'Loshchilov & Hutter (2019). Decoupled Weight Decay Regularization. ICLR.',
      'Yoshida et al. (2023). Deep Learning-Based CTR Measurement on Chest Radiograph. QIMS.',
    ],
  },
  {
    id: 'ecg-classification-design',
    number: '03',
    title: '12-Lead Electrocardiogram Arrhythmia and Conduction Abnormality Classification Architecture',
    field: 'Biomedical Signal Processing · Deep Sequential Modeling',
    competition: 'TEKNOFEST Havacılık ve Teknoloji Festivali — Sağlık Sektöründe Yapay Zeka',
    team: 'SanitasAI',
    applicationId: '4868006',
    summary:
      'Conceptualized and validated a dual-branch hybrid CNN-TCN architecture with temporal attention pooling to classify 12-lead ECG signals into clinical superclasses using the large-scale PTB-XL database.',
    question:
      'How can local morphological waveform features (QRS complexes) and multi-beat temporal rhythm dependencies be simultaneously captured from multi-lead ECG time series?',
    abstract:
      'Cardiac disorders manifest in distinct temporal scales: conduction blocks alter single-beat local waveforms, while rhythm arrhythmias involve multi-beat temporal irregularity. In this Critical Design Report (Proje Sunum Raporu), we designed a dual-branch architecture pairing a 1D Convolutional Neural Network (CNN) for local morphology with a Temporal Convolutional Network (TCN) with dilated causal convolutions for long-range temporal modeling, tested on 21,799 12-lead ECG recordings from the PhysioNet PTB-XL database.',
    problemStatement:
      'Standard 1D-CNNs struggle to capture prolonged rhythm variations across distant cardiac cycles, while traditional RNNs/LSTMs suffer from vanishing gradients and sluggish sequential training. Medical-grade 12-lead ECG classification requires joint modeling of morphology and long-term rhythm.',
    methodology:
      'Processed 500 Hz 10-second 12-lead signals. Mapped detailed SCP-ECG clinical diagnostic codes into three diagnostic superclasses: Normal Sinus Rhythm, Cardiac Arrhythmias (AFIB, AFL, SVT), and Conduction Disorders (LBBB, RBBB, AV blocks). Evaluated Weighted Random Sampling vs Class-Weighted Cross-Entropy for class imbalance. Introduced temporal attention pooling.',
    dataset: 'PhysioNet PTB-XL (21,799 clinical 12-lead recordings from 18,869 patients)',
    datasetDetails: {
      name: 'PhysioNet PTB-XL ECG Database (Wagner et al., 2020)',
      size: '21,799 10-second records (18,869 patients; 52% male, 48% female; ages 0–95)',
      split: '80% Training / 10% Validation / 10% Independent Test',
      sampling: '500 Hz sampling rate, 16-bit resolution, 12 simultaneous clinical leads',
    },
    preprocessing: [
      'Linear interpolation for missing / NaN value handling per electrode',
      'Uniform resampling to 500 Hz target frequency across all leads',
      '4th-order Butterworth bandpass filtering (0.5–40 Hz) to eliminate baseline wander and high-frequency EMG noise',
      'Signal duration standardization: Edge padding and trimming to exactly 5,000 samples (10 seconds)',
      'Independent per-lead temporal z-score normalization (zero mean, unit variance)',
    ],
    model: 'Hybrid 1D-CNN + Temporal Convolutional Network (TCN) with Temporal Attention Pooling',
    modelArchitectureDetails: [
      '1D-CNN Branch: Local feature extractor capturing QRS duration, amplitude, and ST-segment morphological deviations',
      'TCN Branch: Dilated convolutions with exponential dilation factors providing extensive receptive fields across full 10-second cycles',
      'Temporal Attention Pooling: Computes dynamic time-step attention weights, boosting model focus on clinically decisive wave intervals (+2% F1 improvement)',
      'Superclass Fusion Head: Multi-class softmax projection into Normal, Arrhythmia, and Conduction Block categories',
    ],
    hyperparameters: {
      'Sampling Frequency': '500 Hz (5,000 points per lead)',
      'Input Leads': '12 simultaneous channels (I, II, III, aVR, aVL, aVF, V1-V6)',
      'Filter Bandpass': '0.5 – 40.0 Hz (Butterworth 4th order)',
      'Superclasses': 'Normal (59.4%), Arrhythmia (23.5%), Conduction (17.1%)',
      'Evaluation Metric': 'Macro F1 Score (official competition metric)',
    },
    evaluationMetrics: ['Macro F1 Score', 'Confusion Matrix Analysis', 'Temporal Attention Weight Interpretability Profiles'],
    results: {
      highlight: 'Achieved 83.2% Macro F1 on validation and 81.7% Macro F1 on the independent test set.',
      table: [
        { label: 'Validation Macro F1', f1OrIou: '83.20%' },
        { label: 'Test Macro F1', f1OrIou: '81.70%' },
        { label: 'Attention Mechanism Gain', f1OrIou: '+~2.0% F1' },
        { label: 'Normal Class Sensitivity', f1OrIou: 'High Precision & Recall' },
      ],
      summary:
        'The model excelled at distinguishing Normal rhythms and Arrhythmic patterns. The greatest challenge lay in differentiating subtle Conduction Disorders from Normal tracings, where low-amplitude morphological changes were occasionally masked by patient baseline variability.',
    },
    discussionAndLimitations: [
      'Temporal attention pooling confirmed that the network placed peak importance on QRS complexes and irregular rhythm transitions.',
      'Slight class imbalance (59.4% Normal vs 17.1% Conduction) was successfully accommodated without requiring artificial oversampling penalties.',
      'Patient inter-variability remains an active challenge for borderline conduction delays.',
    ],
    contribution:
      'Authored the Critical Design Report documentation, performed the comprehensive literature review across 10 years of ECG deep learning papers, conducted architecture selection trade-off analyses, and analyzed attention weight interpretability profiles.',
    futureWork: [
      'Transition from 3-class superclass categorization to granular multi-label disease diagnostic classification',
      'Incorporate patient demographic priors (age and biological sex) into the late feature fusion stage',
    ],
    status: 'TEKNOFEST 2024 AI in Health Proje Sunum Raporu (CRITICAL DESIGN REPORT)',
    tags: ['ECG Signal Processing', 'TCN', '1D-CNN', 'PTB-XL', 'Temporal Attention'],
    pdfFile: './research-papers/research3.pdf',
    codeUrl: null,
    references: [
      'Wagner et al. (2020). PTB-XL, a large publicly available electrocardiography dataset. Scientific Data.',
      'Gaurhar, Tiwari & Deora. Large-kernel 1D-CNN for ECG conduction and rhythm classification.',
      'Yaser et al. Temporal Convolutional Networks combined with GCN for multi-lead arrhythmia diagnosis.',
      'Bai, Kolter & Koltun (2018). An Empirical Evaluation of Generic Convolutional and Recurrent Networks for Sequence Modeling.',
    ],
  },
  {
    id: 'ecg-classification-detail',
    number: '04',
    title: 'Multi-Class ECG Arrhythmia & Conduction Block Classification: A Hybrid TCN-CNN Approach',
    field: 'Biomedical Signal Processing · Multi-Class Deep Learning',
    competition: 'TEKNOFEST Havacılık ve Teknoloji Festivali — Sağlık Sektöründe Yapay Zeka',
    team: 'SanitasAI',
    applicationId: '4868006',
    summary:
      'Implemented, trained, and evaluated a dual-branch CNN-TCN model on a 5-class balanced 12-lead ECG dataset (5,000 samples), incorporating rigorous digital filtering, 5-fold cross-validation, and gradient-based saliency interpretability.',
    question:
      'Can a unified CNN-TCN deep network achieve balanced, clinically verifiable multi-class performance across Normal, Atrial Fibrillation, Atrial Flutter, Left Bundle Branch Block, and Right Bundle Branch Block?',
    abstract:
      'This project presents the comprehensive Detail Report (Proje Detay Raporu) for a 5-class 12-lead ECG diagnosis system. The competition dataset comprises 5,000 balanced 10-second ECG signals categorized into Normal, AFIB, AFL, LBBB, and RBBB. We engineered a clean digital signal processing pipeline with 4th-order Butterworth filtering and extensive time-domain augmentations. The dual-branch model was evaluated using stratified 5-fold cross-validation, achieving an official Test Macro F1 of 81.25%, with explainability provided by 12-lead gradient saliency mapping.',
    problemStatement:
      'Distinguishing closely related atrial arrhythmias (AFIB vs AFL) and intraventricular conduction blocks (LBBB vs RBBB) requires simultaneous sensitivity to subtle single-beat wave changes (QRS widening, rSR patterns) and broader rhythm irregularity.',
    methodology:
      'Evaluated on 5,000 balanced records (1,000 per class; 700 train / 150 val / 150 test). Removed 19 verified corrupted records during data audit. Conducted stratified 5-fold cross-validation with early stopping (patience = 10, max 100 epochs). CNN branch extracts local morphology; TCN branch extracts dilated temporal context. Evaluated per-class precision, recall, and Macro F1, alongside gradient-based saliency mapping across all 12 leads.',
    dataset: 'TEKNOFEST Official Balanced 12-Lead ECG Dataset (5,000 recordings)',
    datasetDetails: {
      name: 'TEKNOFEST Health AI 5-Class Competition Dataset',
      size: '5,000 total records (1,000 Normal, 1,000 AFIB, 1,000 AFL, 1,000 LBBB, 1,000 RBBB)',
      split: '3,500 Training (700/class) · 750 Validation (150/class) · 750 Test (150/class)',
      sampling: '500 Hz, 10 seconds (5,000 samples per lead × 12 leads)',
    },
    preprocessing: [
      'Data Quality Audit: Identified and excluded 19 corrupt recordings (2 Normal, 8 AFIB, 5 AFL, 2 RBBB, 2 LBBB)',
      'NaN Interpolation: Linear interpolation per electrode across corrupted timestamps',
      'Sampling Standardization: Resampled all records to precisely 500 Hz',
      '4th-Order Butterworth Bandpass Filter (0.5 – 40 Hz) eliminating baseline wander and high-frequency muscular noise',
      'Edge Padding / Trimming to exact 5,000 samples (10.0 seconds)',
      'Z-score temporal normalization per electrode',
      'Training Data Augmentations: Amplitude scaling, Gaussian noise injection, temporal shifting, baseline wander simulation, time masking, and mild time stretching',
    ],
    model: 'Hybrid CNN-TCN Architecture with 12-Lead Multi-Branch Fusion',
    modelArchitectureDetails: [
      '1D-CNN Morphological Encoder: Extracts high-frequency localized features (QRS complexes, P waves, T waves, ST deviations)',
      'TCN Temporal Encoder: Dilated causal convolutions expanding receptive field across the entire 5,000-sample signal duration without recurrent state bottlenecks',
      'Lead-Shared Feature Extraction: Processes all 12 standard leads simultaneously to learn inter-lead spatial and vector relationships',
      'Classification Head: Fully connected layer with Cross-Entropy Loss over the 5 target classes',
    ],
    hyperparameters: {
      'Optimizer': 'Adam / AdamW with weight decay',
      'Loss Function': 'Standard Categorical Cross-Entropy (balanced classes)',
      'Cross Validation': 'Stratified 5-Fold Cross-Validation',
      'Max Epochs': '100 epochs with Early Stopping (patience = 10 on Validation Macro F1)',
      'Target Classes': '5 (Normal, AFIB, AFL, LBBB, RBBB)',
    },
    evaluationMetrics: ['Official Competition Macro F1 Score', 'Macro Precision', 'Macro Recall', 'Class-wise Confusion Matrix', 'Gradient Saliency Maps'],
    results: {
      highlight: 'Official Test Macro F1 reached 81.25%, with Normal (93.55%), LBBB (91.61%), and RBBB (89.77%) achieving outstanding individual F1 scores.',
      table: [
        { label: 'Normal (Sinus Rhythm)', precision: '90.63%', recall: '96.67%', f1OrIou: '93.55% F1' },
        { label: 'LBBB (Left Bundle Branch)', precision: '88.75%', recall: '94.67%', f1OrIou: '91.61% F1' },
        { label: 'RBBB (Right Bundle Branch)', precision: '88.89%', recall: '90.67%', f1OrIou: '89.77% F1' },
        { label: 'AFIB (Atrial Fibrillation)', precision: '66.86%', recall: '75.33%', f1OrIou: '70.85% F1' },
        { label: 'AFL (Atrial Flutter)', precision: '72.22%', recall: '52.00%', f1OrIou: '60.47% F1' },
        { label: 'Overall Macro Average', precision: '81.47%', recall: '81.87%', f1OrIou: '81.25% Macro F1' },
      ],
      summary:
        'The model performed exceptionally on conduction blocks and healthy controls (F1 > 89%). Detailed confusion matrix analysis revealed that the predominant source of error was mutual misclassification between AFIB and AFL (54 AFL cases mispredicted as AFIB), reflecting their closely shared atrial electrophysiological patterns.',
    },
    discussionAndLimitations: [
      'Gradient saliency mapping confirmed high diagnostic attention on distinct QRS windows (~0–0.3s, 2.5–2.8s, 4.5–4.9s, 8.4–8.7s), verifying the network relies on physiologically valid features.',
      'AFIB and AFL distinction represents the main challenge due to overlapping atrial flutter and fibrillatory waveforms over short 10s windows.',
      'Excluding the 19 corrupted records was essential for preventing loss divergence during training.',
    ],
    contribution:
      'Co-engineered the signal preprocessing pipeline (Butterworth filter, z-score normalization), contributed to data quality auditing (identifying 19 corrupted files), ran training and validation experiments, and conducted confusion matrix analysis and gradient saliency interpretability evaluation.',
    futureWork: [
      'Incorporate explicit R-R interval peak detection features to sharpen the discrimination between AFIB and AFL',
      'Investigate beat-aligned segmentation combined with multi-scale Transformer attention',
    ],
    status: 'TEKNOFEST 2024 AI in Health Proje Detay Raporu (DETAIL REPORT)',
    tags: ['ECG Classification', 'AFIB & AFL', 'LBBB & RBBB', 'TCN-CNN', 'Gradient Saliency'],
    pdfFile: './research-papers/research4.pdf',
    codeUrl: null,
    references: [
      'Bai et al. (2018). An Empirical Evaluation of Generic Convolutional and Recurrent Networks for Sequence Modeling.',
      'Loshchilov & Hutter (2019). Decoupled Weight Decay Regularization. ICLR.',
      'Shorten & Khoshgoftaar (2019). A survey on Image Data Augmentation for Deep Learning.',
      'Hannun et al. (2019). Cardiologist-level arrhythmia detection and classification in ambulatory electrocardiograms using a deep neural network. Nature Medicine.',
    ],
  },
];

export const projects = [
  {
    id: 'trainer-app',
    title: 'Trainer App',
    subtitle: 'Web-Based Workout & Training Planner (PWA)',
    description:
      'A responsive Progressive Web Application engineered to help users structure weekly training routines, track daily scheduled workout sessions, and log completed workout histories. Built from scratch with an emphasis on lightweight performance, client-side session reliability, and a distraction-free user experience.',
    problem:
      'Fitness routines often suffer from fragmented tracking across disparate note applications and physical journals. Trainer App centralizes weekly planning, scheduled day-by-day routines, and session history in a single, fast, installable web application.',
    features: [
      'Day-of-Week Workout Planner: Organize exercise routines mapped to specific days of the week',
      'Daily Session Execution View: Automatically loads today’s scheduled workout with step-by-step exercise ordering',
      'Workout History & Notes: Log completed sessions with session notes and timestamped tracking',
      'Progressive Web App (PWA): Standalone installable app with service worker caching and offline resilience',
      'Dark / Light Theme Engine: Instant client-side theme switching with persistent local storage state',
      'Secure Token Authentication: JWT Bearer token authentication with persistent vs session-based login options',
    ],
    learned:
      'Building and deploying Trainer App provided hands-on experience in production software engineering: designing RESTful client-server contracts, managing asynchronous API state and JWT lifecycles, configuring Nginx reverse proxy routing on Linux, and optimizing PWA manifest and service worker caching for real mobile users.',
    stack: [
      'Vanilla JavaScript (ES6+)',
      'Semantic HTML5 & Modern CSS3',
      'PWA (Service Worker & Manifest)',
      'RESTful API (FastAPI Backend)',
      'JWT Bearer Authentication',
      'Nginx Reverse Proxy & Ubuntu Server',
    ],
    liveUrl: 'https://trainerapp.driveme.id',
    sourceUrl: null,
    tags: ['Progressive Web App', 'Full-Stack Software', 'Deployed Production', 'Nginx & Linux'],
  },
];

export const skills = {
  programming: [
    { name: 'Python', note: 'Core research language — PyTorch, NumPy, SciPy, custom training loops, and data pipelines' },
    { name: 'TypeScript', note: 'Type-safe component architecture, interface modeling, and modern web applications' },
    { name: 'JavaScript (ES6+)', note: 'Asynchronous logic, DOM APIs, Service Workers, and client-side architecture' },
    { name: 'HTML5 & Modern CSS3', note: 'Semantic web structure, responsive layouts, Tailwind CSS, and theme engines' },
  ],
  ml: [
    { name: 'Convolutional Neural Networks (CNNs)', note: '1D CNNs for biosignals and 2D CNNs for medical imagery' },
    { name: 'Residual Networks (ResNet)', note: 'Deep feature extraction, residual bottleneck blocks, and gradient flow preservation' },
    { name: 'U-Net & ResUNet++', note: 'Encoder-decoder segmentation, ASPP multi-scale pooling, and channel attention (SE units)' },
    { name: 'Temporal Convolutional Networks (TCN)', note: 'Dilated causal convolutions for multi-beat ECG sequence modeling' },
    { name: 'MobileNetV2 Regression', note: 'Depthwise separable convolutions and linear bottlenecks for landmark regression' },
    { name: 'Transfer Learning & Fine-Tuning', note: 'Adapting pretrained weights to small, high-stakes medical datasets' },
  ],
  frameworks: [
    { name: 'PyTorch', note: 'Tensor operations, custom datasets/dataloaders, backpropagation, and loss functions' },
    { name: 'NumPy & SciPy', note: 'Signal processing, array transformations, and statistical filtering' },
    { name: 'Albumentations & OpenCV', note: 'Medical image augmentation, coordinate scaling, CLAHE, and spatial transforms' },
    { name: 'FastAPI & REST APIs', note: 'Designing client-server endpoints, Pydantic validation, and JWT authentication flows' },
  ],
  concepts: [
    { name: 'Digital Signal Processing (DSP)', note: 'Butterworth bandpass filtering (0.5–40 Hz), z-score normalization, and NaN handling' },
    { name: 'Loss Objectives & Optimization', note: 'Smooth L1 Loss (Huber), Cross-Entropy, AdamW decoupled weight decay, and learning rate scheduling' },
    { name: 'Model Interpretability', note: 'Gradient-based saliency mapping and temporal attention pooling weight visualization' },
    { name: 'Validation & Evaluation', note: 'Stratified 5-Fold Cross-Validation, Macro F1, IoU, 1-MAPE, and confusion matrix auditing' },
  ],
};
