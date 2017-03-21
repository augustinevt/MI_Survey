export const json = [
 {
   title: 'StageOne',
   qestions: [
     {
       prompt: 'What is Your Favorite Color?',
       type: 'text',
       response: false,
     },
     {
       prompt: 'What do you want to sell?',
       type: 'select',
       options: [
         {
           label: 'General Merchendise',
           value: false,
         },
         {
           label: 'Media',
           value: false,
         },
       ]
     }
   ]
 },
 {
   title: 'StageTwo',
   qestions: [
     {
       prompt: 'What is Your Favorite Color?',
       type: 'select',
       options: [
         {
           label: 'red',
           value: false,
         },
         {
           label: 'green',
           value: false,
         },
         {
           label: 'blue',
           value: false,
         },
         {
           label: 'Yellow',
           value: false,
         },
       ]
     },
     {
       prompt: 'What is Your Favorite Color?',
       type: 'text',
       response: false,
     }
   ]
 }
]
