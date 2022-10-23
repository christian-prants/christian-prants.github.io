import React from 'react';
import Card from '../UI/Card';

import img04 from '../../Assets/4.png';
import img03 from '../../Assets/3.png';
import img02 from '../../Assets/2.png';
import img01 from '../../Assets/1.png';
import img00 from '../../Assets/0.png';


import classes from './Projects.module.css';

const Projects = () => {
  return (
    <div className={classes.project}>
      <div className={classes.cards}>
      <Card 
        id='4'
        imgPath={img04}
        title='Simple Calculator'
        description='Uma calculadora com funções simples de divisão, multiplicação, subtração e soma.'
        linkGHProject='https://github.com/christian-prants/My-Portfolio'
        linkGHPage='https://christian-prants.github.io/My-Portfolio/'
      />
      <Card 
        id='3'
        imgPath={img03}
        title='My Portfolio'
        description='O meu portfólio, contendo uma página com um resumo sobre mim, uma com os projetos e outra com meu currículo, que você pode fazer o download.'
        linkGHProject='https://github.com/christian-prants/My-Portfolio'
        linkGHPage='https://christian-prants.github.io/My-Portfolio/'
      />
      {/* FOOD CART APP */}
      <Card 
        id='2'
        imgPath={img02}
        title='Food Cart'
        description='Uma aplicação que permite realizar pedidos em um restaurante, utilizando useContext, useReducer e useEffect.'
        linkGHProject='https://github.com/christian-prants/Food-Cart'
        linkGHPage='https://christian-prants.github.io/Food-Cart/'
      />
      {/* USERS LIST APP */}
      <Card 
        id='1'
        imgPath={img01}
        title='User List'
        description='Uma tela que adiciona usuários a uma lista, o objetivo foi implementar o Error Modal, validação de erros e reutilizar componentes.'
        linkGHProject='https://github.com/christian-prants/User-List'
        linkGHPage='https://christian-prants.github.io/User-List/'
      /> 
      {/* EXPENSE CALCULATOR APP */}
      <Card 
        id='0'
        imgPath={img00}
        title='Expense Calculator'
        description='Uma calculadora onde o usuário pode registrar seus ganhos e gastos durante cada mês.'
        linkGHProject='https://github.com/christian-prants/Expense-Calculator'
        linkGHPage='https://christian-prants.github.io/Expense-Calculator/'
      />
      </div>
    </div>
  )
}

export default Projects