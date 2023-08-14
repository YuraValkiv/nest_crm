import {Module} from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { PositionsModule } from './positions/positions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './Categories/categories.module';




@Module({
  controllers: [],
  providers: [],
  imports: [MongooseModule.forRoot('mongodb+srv://yuravalkiv:yree201210@cluster0.fpxskmi.mongodb.net/app'),
    UsersModule,
    OrdersModule,
    AuthModule,
    PositionsModule,
    CategoriesModule,
  ],
})
export class AppModule {}
