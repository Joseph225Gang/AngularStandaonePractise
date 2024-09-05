import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptPracComponent } from './typescript-prac.component';

describe('TypescriptPracComponent', () => {
  let component: TypescriptPracComponent;
  let fixture: ComponentFixture<TypescriptPracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypescriptPracComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypescriptPracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
