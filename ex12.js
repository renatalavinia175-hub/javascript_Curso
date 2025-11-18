let prompt=require(`prompt-sync`)({sigint:true});
let emails = [],email

for (let i = 0; i<5 ; i ++){
    let email =  String (prompt (`digite o ${i +1}º numero: `));
  emails[i] = email
}
console.log("emails adicionados:");
console.log(emails);