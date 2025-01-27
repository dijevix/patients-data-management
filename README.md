# Patients data management
 <h2 >An app to get and update patients record .</h2>
 This app was made with the purpose of complete the challenge provided by light it

This project have been done with the following tools :

 * React js
 * Next js
 * Toastify for notifications
 * React hook form for form validations

## Getting Started

First copy this repository :
`
git clone https://github.com/dijevix/patients-data-management.git
`

Second, install dependencies:
```
npm i
# or
yarn 
```
Then you can run the server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Understanding my approach for the challenge .

I have been wondering about using a state management like redux, recoil , jotai, zubstan .. etc. But I have not really found any need to add complicated logics to the components and pages since, the code and main objetive was relatevetly simple. I  am used to work with context, flux , hooks and compound component  as design patterns but I could just use hooks and compound component .

I also want to underline that i decided to use next since i feel really comftable using next and algo using Css modules.

My main personal objetive was to create small components, handleling the bussiness data on separated hooks if required, following the Single responsability . I have also used the open-close principle to create the modal with compound component .

