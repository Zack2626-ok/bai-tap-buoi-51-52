import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './module/category/module';
import { ProvinceModule } from './module/province/module';
import { WardModule } from './module/ward/module';
import { CompanyModule } from './module/companies/module';
import { CompanyAdressModule } from './module/company_address/module';
import { CandicateModule } from './module/candicate/module';
import { CvModule } from './module/cv/module';
import { JobModule } from './module/jobs/module';
import { JobApplicationModule } from './module/job_application/module';

@Module({
  imports: [CategoryModule, ProvinceModule, WardModule, CompanyModule, CompanyAdressModule, CandicateModule, CvModule, JobModule, JobApplicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
