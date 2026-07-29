# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\test.spec.js >> Verify blnking of Textbox
- Location: tests\ui\test.spec.js:113:1

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: " blink 1s linear infinite !important;Pardeep Kumar"
Received string:    "float: right;
                    /* margin-top: -37px; */
                    font-weight: bold;
                    padding: 0px 10px;
                    font-size: 20px;
                    background: #27b35f;
                    color: #fff !important;
                    animation: blink 1s linear infinite !important;
                    text-decoration: underline;
                    cursor: pointer;"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - img [ref=e3]
  - generic [ref=e4]:
    - banner:
      - banner [ref=e5]:
        - generic [ref=e10]:
          - link [ref=e12] [cursor=pointer]:
            - /url: index.html
          - navigation [ref=e15]:
            - list [ref=e16]:
              - listitem [ref=e17]:
                - link "Home" [ref=e18] [cursor=pointer]:
                  - /url: index.html
              - listitem [ref=e19]:
                - link "About us" [ref=e20] [cursor=pointer]:
                  - /url: about.html
              - listitem [ref=e21]:
                - link "Courses" [ref=e22] [cursor=pointer]:
                  - /url: courses.html
              - listitem [ref=e23]:
                - link "Blog" [ref=e24] [cursor=pointer]:
                  - /url: blog.html
              - listitem [ref=e25]:
                - link "Practice" [ref=e26] [cursor=pointer]:
                  - /url: practice.html
              - listitem [ref=e27]:
                - link "Contact" [ref=e28] [cursor=pointer]:
                  - /url: contact.html
              - listitem [ref=e29]:
                - link "Notes" [ref=e30] [cursor=pointer]:
                  - /url: contact.html
            - text: 
    - generic [ref=e31]:
      - navigation [ref=e36]:
        - list [ref=e37]:
          - listitem [ref=e38]:
            - link "Home" [ref=e39] [cursor=pointer]:
              - /url: index.html
          - listitem [ref=e40]:
            - link "About" [ref=e41] [cursor=pointer]:
              - /url: courses.html
          - listitem [ref=e42]:
            - link "Courses" [ref=e43] [cursor=pointer]:
              - /url: courses.html
          - listitem [ref=e44]:
            - link "Contact" [ref=e45] [cursor=pointer]:
              - /url: contact.html
      - generic [ref=e46]:
        - generic [ref=e47]: phone:9986666012
        - generic [ref=e48]:
          - text: follow us
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link [ref=e51] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e52]: 
            - listitem [ref=e53]:
              - link [ref=e54] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e55]: 
            - listitem [ref=e56]:
              - link [ref=e57] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e58]: 
            - listitem [ref=e59]:
              - link [ref=e60] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e61]: 
    - generic [ref=e69]: Practice For Testing
    - generic [ref=e70]:
      - generic [ref=e71]:
        - paragraph [ref=e72]: Options Example
        - generic [ref=e73]:
          - radio "Radio 1" [ref=e74]
          - generic [ref=e75]: Radio 1
        - generic [ref=e76]:
          - radio "Radio 2" [ref=e77]
          - generic [ref=e78]: Radio 2
      - generic [ref=e79]:
        - paragraph [ref=e80]: Select Example
        - combobox [ref=e81]:
          - option "Option 1" [selected]
          - option "Option 2"
          - option "Option 3"
      - generic [ref=e82]:
        - paragraph [ref=e83]: Checkbox Example
        - generic [ref=e84]:
          - checkbox "Checkbox 1" [ref=e85]
          - generic [ref=e86]: Checkbox 1
        - generic [ref=e87]:
          - checkbox "checkbox 2" [ref=e88]
          - generic [ref=e89]: checkbox 2
      - generic [ref=e90]:
        - paragraph [ref=e91]: sugesstion Example
        - combobox "Enter Here" [ref=e92]
    - generic [ref=e93]:
      - separator
      - generic [ref=e94]:
        - paragraph [ref=e95]: new window Example
        - button "Open Tab in New Window" [ref=e96] [cursor=pointer]
      - generic [ref=e97]:
        - paragraph [ref=e98]: New tab open Example
        - button "Open New Tab in Same Browser" [ref=e99] [cursor=pointer]
      - generic [ref=e100]:
        - textbox "Enter data" [ref=e101]
        - button "Alert" [ref=e102] [cursor=pointer]
        - button "Confirm" [ref=e103] [cursor=pointer]
    - generic [ref=e104]:
      - separator [ref=e105]
      - link "Teasing Page Blink Text" [ref=e107] [cursor=pointer]:
        - /url: testing.html
      - generic [ref=e108]:
        - paragraph [ref=e109]: Normal Table Example
        - table [ref=e111]:
          - rowgroup [ref=e112]:
            - row "Student Name Subjects Marks" [ref=e113]:
              - columnheader "Student Name" [ref=e114]
              - columnheader "Subjects" [ref=e115]
              - columnheader "Marks" [ref=e116]
            - row "Sandeep Hindi, English,Maths 95" [ref=e117]:
              - cell "Sandeep" [ref=e118]
              - cell "Hindi, English,Maths" [ref=e119]
              - cell "95" [ref=e120]
            - row "Ajay Kumar Biology,Maths,Computer Science 89" [ref=e121]:
              - cell "Ajay Kumar" [ref=e122]
              - cell "Biology,Maths,Computer Science" [ref=e123]
              - cell "89" [ref=e124]
            - row "Aman Science,Hindi, English,Sanskrit 145" [ref=e125]:
              - cell "Aman" [ref=e126]
              - cell "Science,Hindi, English,Sanskrit" [ref=e127]
              - cell "145" [ref=e128]
            - row "Gopal Computer Application, Biology,Maths 79" [ref=e129]:
              - cell "Gopal" [ref=e130]
              - cell "Computer Application, Biology,Maths" [ref=e131]
              - cell "79" [ref=e132]
            - row "Sandeep Hindi, English,Maths 95" [ref=e133]:
              - cell "Sandeep" [ref=e134]
              - cell "Hindi, English,Maths" [ref=e135]
              - cell "95" [ref=e136]
            - row "Sunny Kumar Hindi,Maths,English 110" [ref=e137]:
              - cell "Sunny Kumar" [ref=e138]
              - cell "Hindi,Maths,English" [ref=e139]
              - cell "110" [ref=e140]
      - generic [ref=e141]:
        - paragraph [ref=e142]: Fix header Table Example
        - table [ref=e145]:
          - rowgroup [ref=e146]:
            - row "Name Age City Salary Experience" [ref=e147]:
              - columnheader "Name" [ref=e148]
              - columnheader "Age" [ref=e149]
              - columnheader "City" [ref=e150]
              - columnheader "Salary" [ref=e151]
              - columnheader "Experience" [ref=e152]
          - rowgroup [ref=e153]:
            - row "John Doe 30 New York $70,000 5 years" [ref=e154]:
              - cell "John Doe" [ref=e155]
              - cell "30" [ref=e156]
              - cell "New York" [ref=e157]
              - cell "$70,000" [ref=e158]
              - cell "5 years" [ref=e159]
            - row "Jane Smith 28 Los Angeles $65,000 3 years" [ref=e160]:
              - cell "Jane Smith" [ref=e161]
              - cell "28" [ref=e162]
              - cell "Los Angeles" [ref=e163]
              - cell "$65,000" [ref=e164]
              - cell "3 years" [ref=e165]
            - row "Alice Johnson 35 Chicago $80,000 8 years" [ref=e166]:
              - cell "Alice Johnson" [ref=e167]
              - cell "35" [ref=e168]
              - cell "Chicago" [ref=e169]
              - cell "$80,000" [ref=e170]
              - cell "8 years" [ref=e171]
            - row "Bob Williams 32 San Francisco $75,000 6 years" [ref=e172]:
              - cell "Bob Williams" [ref=e173]
              - cell "32" [ref=e174]
              - cell "San Francisco" [ref=e175]
              - cell "$75,000" [ref=e176]
              - cell "6 years" [ref=e177]
            - row "Eva Davis 29 Miami $68,000 4 years" [ref=e178]:
              - cell "Eva Davis" [ref=e179]
              - cell "29" [ref=e180]
              - cell "Miami" [ref=e181]
              - cell "$68,000" [ref=e182]
              - cell "4 years" [ref=e183]
            - row "Michael Brown 33 Dallas $72,000 7 years" [ref=e184]:
              - cell "Michael Brown" [ref=e185]
              - cell "33" [ref=e186]
              - cell "Dallas" [ref=e187]
              - cell "$72,000" [ref=e188]
              - cell "7 years" [ref=e189]
            - row "Grace Miller 31 Seattle $78,000 5 years" [ref=e190]:
              - cell "Grace Miller" [ref=e191]
              - cell "31" [ref=e192]
              - cell "Seattle" [ref=e193]
              - cell "$78,000" [ref=e194]
              - cell "5 years" [ref=e195]
            - row "David Anderson 34 Denver $85,000 9 years" [ref=e196]:
              - cell "David Anderson" [ref=e197]
              - cell "34" [ref=e198]
              - cell "Denver" [ref=e199]
              - cell "$85,000" [ref=e200]
              - cell "9 years" [ref=e201]
            - row "Susan White 27 Atlanta $62,000 2 years" [ref=e202]:
              - cell "Susan White" [ref=e203]
              - cell "27" [ref=e204]
              - cell "Atlanta" [ref=e205]
              - cell "$62,000" [ref=e206]
              - cell "2 years" [ref=e207]
            - row "Daniel Lee 36 Phoenix $90,000 10 years" [ref=e208]:
              - cell "Daniel Lee" [ref=e209]
              - cell "36" [ref=e210]
              - cell "Phoenix" [ref=e211]
              - cell "$90,000" [ref=e212]
              - cell "10 years" [ref=e213]
    - generic [ref=e214]:
      - generic [ref=e215]:
        - paragraph [ref=e216]: Element Show/Hide
        - button "Show/Hide Element" [ref=e217] [cursor=pointer]
      - generic [ref=e218]:
        - paragraph [ref=e219]: Hover Example
        - button "Hover Effect" [ref=e220] [cursor=pointer]
      - generic [ref=e221]:
        - paragraph [ref=e222]: Hover Example
        - button "Login" [ref=e223] [cursor=pointer]
        - button "SignUp" [ref=e224] [cursor=pointer]
    - generic [ref=e225]:
      - separator [ref=e226]
      - iframe [ref=e227]:
        - generic [ref=f1e2]:
          - banner:
            - banner [ref=f1e3]:
              - generic [ref=f1e8]:
                - link [ref=f1e10] [cursor=pointer]:
                  - /url: index.html
                - navigation [ref=f1e13]:
                  - generic [ref=f1e15] [cursor=pointer]: 
          - generic [ref=f1e16]:
            - navigation [ref=f1e21]:
              - list [ref=f1e22]:
                - listitem [ref=f1e23]:
                  - link "Home" [ref=f1e24] [cursor=pointer]:
                    - /url: index.html
                - listitem [ref=f1e25]:
                  - link "About" [ref=f1e26] [cursor=pointer]:
                    - /url: courses.html
                - listitem [ref=f1e27]:
                  - link "Courses" [ref=f1e28] [cursor=pointer]:
                    - /url: courses.html
                - listitem [ref=f1e29]:
                  - link "Contact" [ref=f1e30] [cursor=pointer]:
                    - /url: contact.html
            - generic [ref=f1e31]:
              - generic [ref=f1e32]: phone:8884880388
              - generic [ref=f1e33]:
                - text: follow us
                - list [ref=f1e34]:
                  - listitem [ref=f1e35]:
                    - link [ref=f1e36] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=f1e37]: 
                  - listitem [ref=f1e38]:
                    - link [ref=f1e39] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=f1e40]: 
                  - listitem [ref=f1e41]:
                    - link [ref=f1e42] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=f1e43]: 
                  - listitem [ref=f1e44]:
                    - link [ref=f1e45] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=f1e46]: 
          - generic [ref=f1e53]:
            - generic [ref=f1e54]:
              - generic [ref=f1e55]: Viv Tech Guru
              - generic [ref=f1e56]: Learn by Experts
            - generic [ref=f1e57]:
              - link "learn more" [ref=f1e59] [cursor=pointer]:
                - /url: about.html
                - text: learn more
                - generic [ref=f1e61]: 
              - link "see all courses" [ref=f1e63] [cursor=pointer]:
                - /url: courses.html
                - text: see all courses
                - generic [ref=f1e65]: 
          - generic [ref=f1e73]:
            - link "Enroll" [ref=f1e76] [cursor=pointer]:
              - /url: enrollForm.html
            - heading "software testing Course" [level=3] [ref=f1e78]:
              - link "software testing Course" [ref=f1e79] [cursor=pointer]:
                - /url: courses.html
            - generic [ref=f1e80]: The expansion of the software testing sector in India may be attributed to a great number of different variables at the same time.
            - generic [ref=f1e81]:
              - generic [ref=f1e83]:
                - text: By
                - link "James S. Morrison" [ref=f1e84] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f1e85]: 352 Sales
          - generic [ref=f1e91]:
            - generic [ref=f1e92]: Why Choose Us?
            - generic [ref=f1e93]:
              - generic [ref=f1e94]:
                - generic [ref=f1e95] [cursor=pointer]:
                  - generic [ref=f1e96]: Comprehensive Courses Catalog
                  - text: "-"
                - paragraph [ref=f1e98]: Vivtech Guru offers a wide range of courses covering various software technologies and programming languages. The catalog include beginner, intermediate, and advanced level courses to cater to learners with different skill levels.
              - generic [ref=f1e99]:
                - generic [ref=f1e100] [cursor=pointer]:
                  - generic [ref=f1e101]: Expertise
                  - text: +
                - paragraph [ref=f1e103]: VivTech Guru led by industry professionals who have extensive knowledge and experience in the specific software or technology . This ensures that learners receive accurate, up-to-date information and insights from experts who have practical experience in the field.
              - generic [ref=f1e104]:
                - generic [ref=f1e105] [cursor=pointer]:
                  - generic [ref=f1e106]: Practical, Hands-on Approach
                  - text: +
                - paragraph [ref=f1e108]: Industry professionals focus on a practical, hands-on teaching approach. VivTech Guru provide learners with opportunities to engage in real-world projects, simulations, and exercises that allow them to apply their knowledge and develop practical skills. This approach helps learners bridge the gap between theory and practice, preparing them for actual industry scenarios.
              - generic [ref=f1e109]:
                - generic [ref=f1e110] [cursor=pointer]:
                  - generic [ref=f1e111]: Personalized Learning Paths
                  - text: +
                - paragraph [ref=f1e113]: Recognizing that learners have different starting points and goals, the platform should offer personalized learning paths. Industry professionals can assess learners' existing knowledge and skills, and then guide them towards the most appropriate courses and resources. Personalized learning paths increase the efficiency and effectiveness of the training process.
              - generic [ref=f1e114]:
                - generic [ref=f1e115] [cursor=pointer]:
                  - generic [ref=f1e116]: Mentoring and Support
                  - text: +
                - paragraph [ref=f1e118]: VivTech Guru led by industry professionals provide mentorship and support to learners. This can be in the form of one-on-one coaching sessions, group mentoring, or access to a community of industry experts. Regular feedback and guidance help learners navigate challenges, clarify doubts, and accelerate their learning progress.
              - generic [ref=f1e119]:
                - generic [ref=f1e120] [cursor=pointer]:
                  - generic [ref=f1e121]: Industry Networking Opportunities
                  - text: +
                - paragraph [ref=f1e123]: VivTech Guru create opportunities for learners to network with industry professionals, potential employers, and fellow learners. This can be through virtual events, webinars, networking groups, or even job placement assistance.Building a professional network is crucial for career growth and accessing industry opportunities.
          - generic [ref=f1e127]:
            - heading "Join Our Platform Today" [level=2] [ref=f1e129]
            - generic [ref=f1e130]: To become the leader in enhancing the employability skills and providing the industry with targeted and productive manpower.
          - contentinfo [ref=f1e131]:
            - contentinfo [ref=f1e132]:
              - generic [ref=f1e134]:
                - generic [ref=f1e136]:
                  - link "VivTechGuru" [ref=f1e138] [cursor=pointer]:
                    - /url: "#"
                    - generic [ref=f1e140]: VivTechGuru
                  - generic [ref=f1e141]:
                    - paragraph [ref=f1e142]: VivTechGuru is software training Platform with an aim to bridge the gap between the demands of the Market and the curriculum of educational institutions.
                    - paragraph [ref=f1e143]: Let’s Get Social
                  - list [ref=f1e145]:
                    - listitem [ref=f1e146]:
                      - link [ref=f1e147] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=f1e148]: 
                    - listitem [ref=f1e149]:
                      - link [ref=f1e150] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=f1e151]: 
                    - listitem [ref=f1e152]:
                      - link [ref=f1e153] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=f1e154]: 
                    - listitem [ref=f1e155]:
                      - link [ref=f1e156] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=f1e157]: 
                - generic [ref=f1e159]:
                  - generic [ref=f1e160]: Quick menu
                  - list [ref=f1e161]:
                    - listitem [ref=f1e162]:
                      - link "Home" [ref=f1e163] [cursor=pointer]:
                        - /url: index.html
                    - listitem [ref=f1e164]:
                      - link "About us" [ref=f1e165] [cursor=pointer]:
                        - /url: about.html
                    - listitem [ref=f1e166]:
                      - link "Courses" [ref=f1e167] [cursor=pointer]:
                        - /url: courses.html
                    - listitem [ref=f1e168]:
                      - link "Blog" [ref=f1e169] [cursor=pointer]:
                        - /url: blog.html
                    - listitem [ref=f1e170]:
                      - link "Contact" [ref=f1e171] [cursor=pointer]:
                        - /url: contact.html
                - generic [ref=f1e173]:
                  - generic [ref=f1e174]: Contact Us
                  - generic [ref=f1e175]:
                    - generic [ref=f1e176]:
                      - generic [ref=f1e177]: "Address:"
                      - generic [ref=f1e178]: 1481 Creekside Lane Avila Beach, CA 93424
                    - generic [ref=f1e179]:
                      - generic [ref=f1e180]: "Phone:"
                      - generic [ref=f1e181]: +91 9986666012
                    - generic [ref=f1e182]:
                      - generic [ref=f1e183]: "Email:"
                      - generic [ref=f1e184]: info@vivtechguru.com
    - contentinfo [ref=e228]:
      - contentinfo [ref=e229]:
        - generic [ref=e231]:
          - generic [ref=e233]:
            - link "VivTechGuru" [ref=e235] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e237]: VivTechGuru
            - generic [ref=e238]:
              - paragraph [ref=e239]: VivTechGuru is software training Platform with an aim to bridge the gap between the demands of the Market and the curriculum of educational institutions.
              - paragraph [ref=e240]: Let’s Get Social
            - list [ref=e242]:
              - listitem [ref=e243]:
                - link [ref=e244] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e245]: 
              - listitem [ref=e246]:
                - link [ref=e247] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e248]: 
              - listitem [ref=e249]:
                - link [ref=e250] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e251]: 
              - listitem [ref=e252]:
                - link [ref=e253] [cursor=pointer]:
                  - /url: "#"
                  - generic [ref=e254]: 
          - generic [ref=e256]:
            - generic [ref=e257]: Quick menu
            - list [ref=e258]:
              - listitem [ref=e259]:
                - link "Home" [ref=e260] [cursor=pointer]:
                  - /url: index.html
              - listitem [ref=e261]:
                - link "About us" [ref=e262] [cursor=pointer]:
                  - /url: about.html
              - listitem [ref=e263]:
                - link "Courses" [ref=e264] [cursor=pointer]:
                  - /url: courses.html
              - listitem [ref=e265]:
                - link "Blog" [ref=e266] [cursor=pointer]:
                  - /url: blog.html
              - listitem [ref=e267]:
                - link "Contact" [ref=e268] [cursor=pointer]:
                  - /url: contact.html
          - generic [ref=e270]:
            - generic [ref=e271]: Contact Us
            - generic [ref=e272]:
              - generic [ref=e273]:
                - generic [ref=e274]: "Address:"
                - generic [ref=e275]: 1481 Creekside Lane Avila Beach, CA 93424
              - generic [ref=e276]:
                - generic [ref=e277]: "Phone:"
                - generic [ref=e278]: +91 9986666012
              - generic [ref=e279]:
                - generic [ref=e280]: "Email:"
                - generic [ref=e281]: info@vivtechguru.com
```

# Test source

```ts
  21  |     let url = 'https://vivtechguru.com/practice.html';
  22  |     await page.goto(url);
  23  |     let Checkbox1 = page.locator("#flexCheck");
  24  |     let Checkbox2 = page.locator("#flexCheckChecked");
  25  |     await Checkbox1.click();
  26  | 
  27  |     await expect(Checkbox1).toBeChecked();
  28  | 
  29  |     await Checkbox2.click();
  30  | 
  31  |     await expect(Checkbox2).toBeChecked();
  32  | 
  33  | 
  34  | });
  35  | test('Verify Dropdown Selection', async ({ page }) => {
  36  | 
  37  |     let url = 'https://vivtechguru.com/practice.html';
  38  |     await page.goto(url);
  39  | 
  40  |     await page.selectOption("//select", "Option 2");
  41  | 
  42  |     await expect(page.locator("//select")).toHaveValue("option2");
  43  | 
  44  |     await page.pause();
  45  | 
  46  | });
  47  | 
  48  | test('verify Textbox Input', async ({ page }) => {
  49  | 
  50  |     let url = 'https://vivtechguru.com/practice.html';
  51  |     await page.goto(url);
  52  |     let textbox = page.getByPlaceholder('Enter data');
  53  |     await textbox.fill("Hello, World!");
  54  |     await expect(textbox).toHaveValue("Hello, World!");
  55  | 
  56  | 
  57  | });
  58  | test('Verify Autocomplete Textbox', async ({ page }) => {
  59  | 
  60  |     let url = 'https://vivtechguru.com/practice.html';
  61  |     await page.goto(url);
  62  | 
  63  |     let autocompleteTextbox = page.getByPlaceholder('Enter Here');
  64  |     await autocompleteTextbox.fill("C++");
  65  |     await page.waitForTimeout(2000);
  66  |     await page.getByText("C++").click();
  67  |     await expect(autocompleteTextbox).toHaveValue("C++");
  68  | 
  69  | });
  70  | 
  71  | test('Verify Alert', async ({ page }) => {
  72  | 
  73  |     let url = 'https://vivtechguru.com/practice.html';
  74  | 
  75  |     await page.goto(url);
  76  | 
  77  | 
  78  |     page.on('dialog', async dialog => {
  79  |         console.log(`Dialog message: ${dialog.message()}`);
  80  |         await dialog.accept();
  81  |     });
  82  |     // let textbox = page.getByPlaceholder('Enter data');
  83  |     // await textbox.fill("Hello, World!");
  84  | 
  85  |     await page.locator("[onclick='showConfirm()']").click()
  86  | 
  87  |     await page.locator("#flexRadioDefault1").click();
  88  | 
  89  | 
  90  | });
  91  | 
  92  | test('Verify New Window', async ({ page, context }) => {
  93  | 
  94  |     let url = 'https://vivtechguru.com/practice.html';
  95  | 
  96  |     await page.goto(url);
  97  | 
  98  |     const [newPage] = await Promise.all([
  99  |         context.waitForEvent('page'),
  100 |         page.locator("[onclick='openNewWindow()']").click()
  101 |     ]);
  102 | 
  103 |     await newPage.getByPlaceholder('Enter your name').fill("Hello, World!");
  104 | 
  105 |     await expect(newPage.getByPlaceholder('Enter your name')).toHaveValue("Hello, World!");
  106 |     await newPage.pause()
  107 |     await newPage.close();
  108 |     await page.selectOption("//select", "Option 2");
  109 | 
  110 | 
  111 | });
  112 | 
  113 | test('Verify blnking of Textbox', async ({ page }) => {
  114 | 
  115 |     let url = 'https://vivtechguru.com/practice.html';
  116 |     await page.goto(url);
  117 |     await page.locator('.blinkingText')
  118 | 
  119 |     let value = await page.locator('.blinkingText').getAttribute('style');
  120 | 
> 121 |     await expect(value).toContain(' blink 1s linear infinite !important;Pardeep Kumar');
      |                         ^ Error: expect(received).toContain(expected) // indexOf
  122 |     console.log(value);
  123 | 
  124 |     await page.screenshot({ path: 'C://Test\\MCP2\\screenshot.png', fullPage: true });
  125 | 
  126 | 
  127 | });
  128 | 
  129 | test('Verify Scrollbar functionality', async ({ page }) => {
  130 | 
  131 |     let url = 'https://vivtechguru.com/practice.html';
  132 |     await page.goto(url);
  133 | 
  134 |     await page.locator('.table1-container').evaluate((el) => {
  135 |         el.scrollTop = el.scrollHeight;
  136 |     });
  137 | 
  138 |     // await page.evaluate(() => {
  139 |     //     window.scrollTo(0, document.body.scrollHeight);
  140 |     // });
  141 | 
  142 |     // await page.evaluate(() => {
  143 |     //     window.scrollTo(500, 0);
  144 |     // });
  145 | 
  146 |     // let btn = await page.locator("[onclick='openLoginModal()']").scrollIntoViewIfNeeded();
  147 |     // expect(await btn.isVisible()).toBeTruthy();
  148 | 
  149 |     // //Verify Scrollbar functionality
  150 |     // await page.locator("[onclick='openLoginModal()']").click();
  151 | 
  152 |     //Horizontal Scrollbar
  153 | 
  154 | 
  155 | 
  156 | 
  157 | 
  158 | 
  159 | });
  160 | 
  161 | test('Frame Handling', async ({ page }) => {
  162 | 
  163 |     let url = 'https://vivtechguru.com/practice.html';
  164 |     await page.goto(url);
  165 | 
  166 | 
  167 |     let frame = page.frameLocator('[title="Iframe Example"]');
  168 |     await frame.locator('(//*[@class="button home_button"]/a)[1]').click();
  169 |     await frame.locator('(//*[@class="button home_button"]/a)[1]').click();
  170 | 
  171 |     await page.pause();
  172 | 
  173 | 
  174 | });
  175 | 
  176 | test('Mouse Hover and Keyboard operation ', async ({ page }) => {
  177 | 
  178 |     let url = 'https://vivtechguru.com/practice.html';
  179 |     await page.goto(url);
  180 | 
  181 |     await page.locator("//button[text()='Hover Effect']").hover();
  182 | 
  183 |     //Right click on the button
  184 |     // await page.locator("//button[text()='Hover Effect']").click({ button: 'right' });
  185 | 
  186 |     await page.locator("//button[text()='Hover Effect']").dblclick();
  187 | 
  188 |     // await page.locator("[onclick='openLoginModal()']").click();
  189 | 
  190 |     // await page.locator("#first").click();
  191 | 
  192 |     // await page.keyboard.type("Hello, World!");
  193 | 
  194 |     // await page.locator("#first").press('Control+A');
  195 | 
  196 |     // await page.keyboard.press('Control+C');
  197 | 
  198 | 
  199 |     // await page.locator('#password').nth(0).click();
  200 | 
  201 |     // await page.locator('#password').nth(0).press('Control+V');
  202 | 
  203 | 
  204 | 
  205 |     await page.pause();
  206 | 
  207 | 
  208 | });
  209 | 
  210 | 
  211 | test('Diffrent ways of wait in Playwright', async ({ page }) => {
  212 | 
  213 |     let url = 'https://vivtechguru.com/practice.html';
  214 |     await page.goto(url);
  215 | 
  216 |     await page.waitForEvent('load');
  217 | 
  218 |     await page.waitForTimeout(2000);
  219 | 
  220 |     await page.waitForSelector("//button[text()='Hover Effect']");
  221 | 
```