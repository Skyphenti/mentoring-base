import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, numberAttribute } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';

  readonly headerNavItem1 = 'Главная';
  readonly headerNavItem2 = 'О компании';
  readonly headerNavItem3 = 'Каталог';

  headerPhoneNumber = '+7 (965) 084-29-29';

  readonly menuItemCatalogTitle = 'Каталог';

  heroText = 'Инструмент для вашего бизнеса';

  featuresItem1MainText = 'Большой ассортимент';
  featuresItem2MainText = 'Доставка стройматериалов';
  featuresItem3MainText = 'система управления качеством';

  featuresItem1SecondaryText = 'строительных материалов всегда в наличии';
  featuresItem2SecondaryText = 'в течение четырех часов или в любое удобное время'
  featuresItem3SecondaryText1 = 'Многоуровневая'
  featuresItem3SecondaryText2 = 'по стандарту ISO 9001'

  isCatalogShow = false;

  isHeroShow = true;

  readonly aboutCompany = navMenuItemName;

  newPages = newPages;

  isUpperCase = true;
  
  menuItems = upperCaseMenuItems
  
  changeMenuText() {
    this.menuItems = menuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    
    this.isUpperCase = !this.isUpperCase
  }
  
}

function navMenu(navMenuItem: string) {
  return navMenuItem
}
const menuItems = ['Стройматериалы' , 'Инструменты', 'Электрика', 'Интерьер и отделка'];
const upperCaseMenuItems = menuItems.map(item => item.toUpperCase())

const navItemName: string = 'О компании';

const navMenuItemName = navMenu(navItemName)

const newPages = [5,4,3,2,1]



