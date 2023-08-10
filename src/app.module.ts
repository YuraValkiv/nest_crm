import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { AuthController } from './auth/auth.controller';
import { PositionsController } from './positions/positions.controller';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { PositionsService } from './positions/positions.service';
import { PositionsModule } from './positions/positions.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  controllers: [],
  providers: [],
  imports: [
    UsersModule,
    OrdersModule,
    AuthModule,
    PositionsModule,
    PrismaModule
  ],
})
export class AppModule {}
