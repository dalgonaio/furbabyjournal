import {JsxAttribute} from 'typescript';

export enum SelectedPage {
  Home = 'Home',
  About = 'About',
  ContactUs = 'Contact Us',
  JoinUs = 'Join Us',
  SignIn = 'Sign In',
}

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};
