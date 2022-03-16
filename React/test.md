tests in react are opiniated

* test what the user will see
* find elments by accessibility markers

tests are made of assertions, each made of: 
* an expectation
*  a matcher. Matchers can be DOM-based (toBeVisible etc.)



# Why use TDD ?

make test less painful, because it si integrated in the process and is not an "after thought" chore.

make it so that you do not need to test your app "for real", in the browser. Time-efficient! 

# Types of test: 

unit tests = one unit of codes (function, component) in insolation
* aims to work in complete isolation - it mocks depencies and check the internal logic of the unit
* PRO: easy to debug (because easy to locate the program) / CONS: do not reflect the user experience AND likelier to break with refactoring etc. 

integration test = how units work together

functional tests = test a particular function (behavior) of your software
* PROS: close to how users experience the service, are robust (don't collapse when refactored) BUT more difficult to debug


Acceptance / End to End (E2E) Tests (require cypress, Selnium), not really for React testing library, requires use of browser


React testing library encourages **functional tests** (test stuff as the user would test it) 


BDD vs TDD
- BDD involves other groups than developers (QA, business partners etc.) 

# Accessibility

For accessbility reason, we should prioritized a set of queries used by screen readers etc. Par ex, il vaut mieux utiliser getByRole que getByText car ça simule la façon dont les screen-readers trouve les éléments. 
