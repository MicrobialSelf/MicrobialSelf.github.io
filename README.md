# Microbial Self – Interactive Exploration of Identity, Microbiome, and Psychology

## Overview

**Microbial Self** is a final project developed for the *Microbial Self* course at New York University Abu Dhabi. The project transforms key theoretical concepts from the course into an interactive web-based prototype that explores how biological, environmental, and psychological factors contribute to the idea of the “self.”

Rather than treating identity as fixed or purely human-centered, this project frames the self as a **relational and dynamic process**, shaped through interactions between the microbiome, lifestyle, body, environment, and psychological interpretation.

This tool is designed for **reflection and learning**, not diagnosis or clinical interpretation.

---
## Link
https://microbialself.github.io/#/
---

## Core Concept

The project is grounded in course discussions on how microbes challenge traditional notions of individuality. Instead of a bounded self, the “self” is understood as a **holobiont system**—a composite of human and microbial life embedded in environmental and social contexts.

The platform invites users to explore this idea through two integrated modules:
- A **microbiome + lifestyle analysis module**
- A **psychological self-schema reflection module**

---

## Features

### 1. Microbiome & Lifestyle Module

Users can upload a gut microbiome CSV file (two sample csv files provided in the repository as "divers.csv" and "low.csv") and complete a lifestyle questionnaire.

The system then:

- Computes an approximate **Shannon diversity score**
- Identifies **dominant microbial taxa** from relative abundance data
- Generates a **lifestyle-based microbial loss score**
- Produces an interpretive narrative connecting results to concepts such as:
  - Dysbiosis
  - Industrialization
  - Ecological resilience
  - Holobiont theory

#### Visualization
- Microbial composition is displayed using a **dynamic bacterial visualization**
- Changes in input data affect the structure and representation of the microbiome output

---

### 2. Self-Schema Interpreter

This module provides a reflective psychological profile based on user responses across multiple dimensions:

- Looking-glass self sensitivity  
- Interpretive style (constructivist ↔ essentialist)  
- Identity orientation (relational ↔ individualistic)  
- Embodied self-continuity (connected ↔ separate)  
- Social comparison patterns  

#### Output
- A **radar chart visualization** dynamically generated from responses
- Interpretive feedback for each psychological dimension

This module is inspired by theories from:
- Symbolic interactionism  
- Narrative identity theory  
- Embodiment and relational identity frameworks  

---

### 3. Technologies & Methods Explorer

A supporting module that explains the scientific pipeline behind microbiome data processing, including:

- 16S rRNA sequencing
- Shotgun metagenomics
- Metabolomics
- Bioinformatics pipelines (QC → feature extraction → taxonomy → normalization)

It also highlights limitations in microbiome interpretation, including:
- Loss of biological resolution in simplified datasets
- Confounding environmental and social variables
- Risks of overinterpreting relative abundance data

---

## Ethical Considerations & Limitations

This project intentionally simplifies complex biological and psychological systems for educational purposes.

Key limitations include:

- Microbiome analysis is based on a single CSV snapshot and does not capture longitudinal or strain-level variation
- Lifestyle scoring reduces complex structural and socioeconomic factors into simplified categories
- Psychological self-schema outputs are **not clinically validated instruments**
- No causal relationship should be inferred between microbiome composition and psychological traits

### Intended Use

This tool is designed for:
- Educational exploration
- Conceptual reflection
- Interdisciplinary learning

It is **not intended for diagnostic, medical, or predictive use**.

---

## Data Interpretation Warning

Any alignment or mismatch between microbiome and psychological profiles should be understood as:
> A prompt for reflection, not a scientific or clinical conclusion.

---

## Key Questions Explored

This project engages with broader questions raised in the course:

- How does microbial life reshape our understanding of identity?
- Who has access to microbiome sequencing technologies?
- How should sensitive biological data be interpreted or shared?
- What are the risks of overinterpreting computational health proxies?
- How do environment, lifestyle, and biology interact in shaping the self?

---

## Technical Notes

- The microbiome module supports CSV input with relative abundance data
- Diversity is computed using Shannon entropy (simplified implementation)
- Outputs are dynamically rendered visualizations (microbiome + radar chart)
- Built as an interactive web-based prototype

---

## Project Status

This is a completed academic prototype developed as part of coursework at NYU Abu Dhabi.

Future extensions could include:
- Longitudinal microbiome tracking
- More robust ecological modeling
- Expanded psychological frameworks
- Improved dataset integration and validation

---

## Author

Rylee Rosenlieb and Ahmad Farroukh
New York University Abu Dhabi  
Microbial Self Course Project  
