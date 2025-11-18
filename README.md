=>2

TypeScript হলো জাভাস্ক্রিপ্টের মতোই, কিন্তু এতে স্ট্যাটিক টাইপ সিস্টেম আছে। টাইপ থাকায় আমরা কোড লিখতে পারি আরও নিরাপদভাবে এবং ভুল কমাতে পারি।

1.Keyof কীওয়ার্ড
  keyof হলো TypeScript-এর একটি অপারেটর যা কোনো অবজেক্ট টাইপের সব প্রপার্টির নামকে টাইপ হিসেবে বের করতে ব্যবহার করা হয়। এটি মূলত টাইপ-সেফ কোড লিখতে সাহায্য করে, বিশেষত যখন আমরা অবজেক্টের প্রপার্টি অ্যাক্সেস করতে চাই।

উদাহরণ

interface User{
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; 

এরপর আমরা ফাংশন লিখতে পারি যা অবজেক্টের প্রপার্টি রিটার্ন করে, এবং TypeScript নিশ্চিত করবে যে আমরা শুধুমাত্র বৈধ প্রপার্টি নাম ব্যবহার করছি:

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}

const user: User = { id: 1, name: "Razaul", email: "razaulkarim2410@gmail.com" };

console.log(getValue(user, "name"));




=>3
any , unknown এবং never টাইপ

any টাইপ যেকোনো মান গ্রহণ করতে পারে। এটি ব্যবহার করলে TypeScript কোনো টাইপ চেকিং করে না।

let value: any;
value = 10;
value = "hello";
value = true;

unknown
unknown টাইপও যেকোনো মান গ্রহণ করতে পারে, কিন্তু ব্যবহার করার আগে টাইপ চেক বাধ্যতামূলক।

let value: unknown;
value = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); 
}
এখানে TypeScript আমাদের ভুল ব্যবহার থেকে রক্ষা করছে।

never
never টাইপ বোঝায় এমন ফাংশন যা কখনো স্বাভাবিকভাবে রিটার্ন করবে না। উদাহরণঃ

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while(true) {}
}

never ব্যবহার হয় সেইসব ফাংশনের জন্য যা error throw করে বা অনন্ত লুপে থাকে।