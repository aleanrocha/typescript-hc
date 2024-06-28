/* 

  01 - Criar uma função que receba review dos usuários,
  utilizar o narrowing para receber o dado;

  2 - As possibilidades são boolean e number;

  3 - Serão enviados números de 1 a 5 (estrelas), prever uma 
  mensagem para cada uma dessas notas;

  4 - False para quando o usuário não faz o review, prever uma 
  mensagem para isso também;

 */ 

function userReview(review?: number | boolean) {
  if (typeof review === 'number') {
    if (review === 1) {
      console.log(`Você avaliou o produto com ${review} estrela. Isso indica que o produto é RUIM!`)
    } else if (review === 2) {
      console.log(`Você avaliou o produto com ${review} estrelas. Isso indica que o produto é RAZOÁVEL`)
    } else if (review === 3) {
      console.log(`Você avaliou o produto com ${review} estrelas. Isso indica que o produto é BOM!`)
    } else if (review === 4) {
      console.log(`Você avaliou o produto com ${review} estrelas. Isso indica que o produto é MUITO BOM!`)
    } else if (review === 5) {
      console.log(`Você avaliou o produto com ${review} estrelas. Isso indica que o produto é EXCELENTE!`)
    }
  } else {
    console.log('O usuário não avaliou o produto.')
  }
}

userReview(1)
userReview(2)
userReview(3)
userReview(4)
userReview(5)
userReview()
