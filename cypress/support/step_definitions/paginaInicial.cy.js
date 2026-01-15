import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'
import PaginaInicial from '../pages/paginaInicial.page'

// Acessar o site
Given('que estou na página de login do Automatize Exercise', () => {
  cy.visit('/')
})

// Acessar o site
And('eu clico em "Signup / Login"', () => {
  PaginaInicial.acessarLogin()
})