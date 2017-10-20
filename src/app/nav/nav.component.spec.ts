import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([]) ],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to todos page', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    // <a href="/todos">
    const index = debugElements.findIndex(de => de.properties['href'] === '/todos');

    expect(index).toBeGreaterThan(-1);
  });
});
