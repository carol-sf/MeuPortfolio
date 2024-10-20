import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBizuAppComponent } from './project-bizu-app.component';

describe('ProjectBizuAppComponent', () => {
  let component: ProjectBizuAppComponent;
  let fixture: ComponentFixture<ProjectBizuAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBizuAppComponent]
    });
    fixture = TestBed.createComponent(ProjectBizuAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
