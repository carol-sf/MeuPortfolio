import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWebPoliceComponent } from './project-web-police.component';

describe('ProjectWebPoliceComponent', () => {
  let component: ProjectWebPoliceComponent;
  let fixture: ComponentFixture<ProjectWebPoliceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectWebPoliceComponent]
    });
    fixture = TestBed.createComponent(ProjectWebPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
