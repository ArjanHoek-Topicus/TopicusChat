import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[StyledNavLink]',
})
export class StyledNavigationLinkDirective {
  @HostBinding('class.styled-nav-link') styledNavLinkClass = true;
}
