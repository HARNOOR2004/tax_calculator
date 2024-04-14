# tax_calculator
Tax calulator with the following requirements-
- Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
    - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
    - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
- Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
    - 30% for people with age < 40
    - 40% for people with age ≥ 40 but < 60
    - 10% for people with age ≥ 60
    - Example
        - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
![image](https://github.com/HARNOOR2004/tax_calculator/assets/124369192/f530c879-130a-4ed0-b611-03f081d2442c)
![image](https://github.com/HARNOOR2004/tax_calculator/assets/124369192/2005092d-0303-4390-8290-d6932950ffa5)

