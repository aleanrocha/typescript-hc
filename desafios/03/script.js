/*

  01 - Criar uma função que receba review dos usuários,
  utilizar o narrowing para receber o dado;

  2 - As possibilidades são boolean e number;

  3 - Serão enviados números de 1 a 5 (estrelas), prever uma
  mensagem para cada uma dessas notas;

  4 - False para quando o usuário não faz o review, prever uma
  mensagem para isso também;

 */
function userReview(review) {
    if (typeof review === 'number') {
        if (review === 1) {
            console.log("Voc\u00EA avaliou o produto com ".concat(review, " estrela. Isso indica que o produto \u00E9 RUIM!"));
        }
        else if (review === 2) {
            console.log("Voc\u00EA avaliou o produto com ".concat(review, " estrelas. Isso indica que o produto \u00E9 RAZO\u00C1VEL"));
        }
        else if (review === 3) {
            console.log("Voc\u00EA avaliou o produto com ".concat(review, " estrelas. Isso indica que o produto \u00E9 BOM!"));
        }
        else if (review === 4) {
            console.log("Voc\u00EA avaliou o produto com ".concat(review, " estrelas. Isso indica que o produto \u00E9 MUITO BOM!"));
        }
        else if (review === 5) {
            console.log("Voc\u00EA avaliou o produto com ".concat(review, " estrelas. Isso indica que o produto \u00E9 EXCELENTE!"));
        }
    }
    else {
        console.log('O usuário não avaliou o produto.');
    }
}
userReview(1);
userReview(2);
userReview(3);
userReview(4);
userReview(5);
userReview();
