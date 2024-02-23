import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveFormComponent } from './template-drive-form.component';

describe('TemplateDriveFormComponent', () => {
  let component: TemplateDriveFormComponent;
  let fixture: ComponentFixture<TemplateDriveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateDriveFormComponent]
    });
    fixture = TestBed.createComponent(TemplateDriveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
