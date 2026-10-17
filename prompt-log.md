## Task 1 — Sector Selection

| Item | Example |
| :---  | :---   |
| **Sector** | Agriculture & Food Innovation |
| **Local Challenge** | Local farmers may have difficulty keeping track of their crops, monitoring planting schedules, and remembering basic crop care activities.|
| **Target Users** | Local farmers and the small growers in the Philippines
| **Proposed Project** | Anihan: A community growing  |
| **Key Features** | Crop planting guide, planting & harvest reminders, community growing registry.| 


## Task 2 — Zero-Shot Prompting
*Objective: *
Generate a basic webpage using a simple prompt without examples.

*Exact Prompt:*
Create a simple webpage that helps local farmers manage their crops and farming activities.

*Actual Copilot Output:*
Copilot generated a basic farming webpage with a clean layout. 
It included farming information, crop progress, farm activities, and a weekly calendar. 
However, the webpage did not clearly focus on local farmers in the Philippines, and the farming task checklist was not interactive.

*What Worked:*
The prompt generated a basic farming webpage with useful farming information and a clean design.

*What Needs Improvement:*
The webpage did not clearly identify the target community, and the checklist was not interactive.

*Next Action / Verification:*
I will improve the prompt by identifying local farmers as the target users and requiring an interactive checklist



## Task 3 — Improve: Anatomy of a Prompt
*Objective:*
Improve output relevance using structured prompt components.

*Exact Prompt:*
Act as a frontend web developer. Create a responsive single-page Agriculture & Food Innovation for in a local farmer in the Philippines. 
Include a crop planting guide. farming task checklist where user can mark tasks as completed, and a crop care and harvest reminder section demonstration data. Use semantic HTML, CSS, and vanilla JavaScript. 
Do not use external frameworks, backend services, or live hazard data. Provide the required front-end files and implement reminders that show which farms or gardens have activities due or overdue. Highlight farms with crop stress, water shortages, or food storage concerns. 
The interface must remain readable on mobile screens, and the checklist must work through mouse and keyboard interaction. Include a notice that the website is a demo and not for real or confidential farm data.

*Actual Copilot Output:*
Copilot generated a responsive agriculture webpage for local farmers in the Philippines. 
The webpage included a crop planting guide, a farming task checklist, crop care and harvest reminders, and alerts for farm concerns. 
The design used HTML, CSS, and JavaScript. Further testing was needed to check the checklist's keyboard interaction and the mobile layout.


*What Worked:*
The structured prompt generated a more relevant agriculture website for local farmers in the Philippines and included the requested features.

*What Needs Improvement:*
The checklist and mobile layout still needed to be tested.

*Next Action / Verification:*
I will test the checklist using a keyboard and check whether the website displays properly on a mobile screen.


## Task 4 — Few-Shot and Role Assignment
*Objective:*
Explore how examples and specialized perspectives influence AI output.

## Experiment A: Few-Shot Prompting
*Exact Prompt:*
Create crop information for the Agriculture & Food Innovation website using the following format.
Example 1:
Crop: Rice
Category: Cereal Crop
Description: Rice is commonly grown in many farming communities in the Philippines.
Farming Task: Check the field and monitor water conditions.

Example 2:
Crop: Corn
Category: Cereal Crop
Description: Corn is used for food, animal feed, and other products.
Farming Task: Check the soil and monitor crop growth.
Using the same format, generate information for four additional crops or vegetables commonly grown in the Philippines. Display the information as simple crop cards using HTML, CSS, and JavaScript. Use general educational information and do not include unsupported claims about crop yields.


*Actual Copilot Output:*
Copilot generated crop information using the provided format. Each crop entry included the crop name, category, description, and farming task. 
The information was organized into crop cards to make it easier for users to read and understand.

*What Worked:*
The examples helped Copilot follow a consistent format. The crop name, category, description, and farming task were easier to organize and understand.

*What Needs Improvement:*
The examples helped Copilot follow a consistent format. The crop name, category, description, and farming task were easier to organize and understand.

*Next Action / Verification:*
I will check whether the generated crop information follows the same format and review the descriptions and farming tasks.


## Task 4 — Few-Shot and Role Assignment
*Objective:*
Ask Copilot to examine the same interface from a specialized perspective.

## Experiment B: Role Assignment
*Exact Prompt:*
Act as a frontend accessibility reviewer. Examine the Agriculture & Food Innovation for local farmers. 
Identify problems involving HTML semantics, keyboard access, labels, and visual clarity. Recommend targeted improvements without changing the project's scope.

*Actual Copilot Output:*
Copilot reviewed the agriculture website from an accessibility perspective. It focused on HTML semantics, keyboard navigation, form labels, and visual clarity. 
It also suggested improvements to make the website easier to use and understand.

*What Worked:*
The role assignment prompt helped focus the review on HTML structure, keyboard access, labels, and visual clarity.

*What Needs Improvement:*
The recommendations needed to be checked against the actual source code to determine which improvements were necessary.

*Next Action / Verification:*
I will review the recommendations and test the website's keyboard controls, labels, and readability.


## Task 5 — Analyze Structured Reasoning and Refinement
*Objective:*
Use AI-assisted analysis to identify and improve a specific implementation weakness.

*Exact Prompt:*
Review my Agriculture & Food Innovation website for local farmers. Check whether the crop planting guide displays correctly, the farming task checklist works properly, the reminder section is clear, the HTML uses appropriate semantic elements, and the website is responsive on mobile screens.
Identify the two most important implementation issues based on the provided code. Recommend the smallest appropriate corrections and explain how I can test them. Do not rewrite the entire website.


*Actual Copilot Output:*
Copilot identified a possible problem with the farming task checklist and suggested a correction. I tested the checklist by pressing Tab to reach the first item and pressing Space. I also clicked the label to check whether it selected the correct checkbox. 
The checklist worked during my browser test, which helped me check its usability and accessibility.

*What Worked:*
The prompt guided Copilot to focus on specific implementation issues and recommend targeted corrections.

*What Needs Improvement:*
The recommendations needed to be verified in the browser instead of assuming that the suggested problem existed.

*Next Action / Verification:*
I used the Tab key to reach the first checklist item and pressed Space to test it. I also checked whether clicking the label selected the correct checkbox.



## Task 6 — Compare and Submit
*Objective:*
Evaluate how your prompting techniques influenced the final prototype.

| Technique | Observation |
| :---  | :---   |
| **Zero-Shot** | The simple prompt gave Copilot a general idea of the farming website, but some requirements were not clearly specified. |
| **Structured Prompt** | Adding the project context, features, and constraints helped make the generated website more relevant to local farmers. |
| **Few-Shot** | Providing examples helped Copilot organize crop information in a consistent format. |
| **Role Assignment** | Asking Copilot to act as an accessibility reviewer helped identify possible issues with labels, keyboard access, and readability. |
| **Structured Analysis** | Reviewing the code helped identify possible problems and suggest corrections that could be tested. | 








