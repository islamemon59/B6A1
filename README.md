1. What are some differences between interfaces and types in TypeScript?
   Answer:

- একই interface কে একাধিক বার declare করলে এগুলো merge হয়ে যায়। কিন্তু type কে একাদিকবার declare করলে error দেয় interface এর মতো marge হয় না।

- interface এ extends ব্যবহার করা যায়। type এ extends ব্যাবহার করা যায় না কিন্তু intersection (&) ব্যাবহার করা যায়।

- Functions, Unions, Tuples এ type বেশি flexible কিন্তু interface দিয়ে এগুলো করা যায় না।

- interface এবং type দুইটাই class এ ব্যাবহার করা যায়।

2. Explain the difference between any, unknown, and never types in TypeScript?
   Answer:

\*any
  - কোন টাইপ চেক করে না।
  - যেকোনো কিছু assign করা যায়।
  - TypeScript এ কোন রকম error ধরবে না।
  - সবথেকে বিপদজনক টাইপ।

\*unknown

- এটি any থেকে safe version।
- সব কিছু assign করা যায়।
- এটাতে কিছু করতে গেলে type চেক করতে হবে।

\*never

- never type মানে এমন কিছু যা কখনো return করবে না।
- infinite loop, function যেটা নাকি সবসময় এররর দেয় never এইগুলোর জন্য ব্যাবহার করা হয়।
