// src/dashboard/dashboard.controller.ts

import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // adjust path as per your auth setup

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @UseGuards(JwtAuthGuard) // Protect route with JWT auth guard
  @Get('stats')
  async getStats() {
    return this.dashboardService.getStats();
  }
}
