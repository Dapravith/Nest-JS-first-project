import { Injectable } from '@nestjs/common';

@Injectable()
export class NestjsService {
    private nestjs = [
        {id: 0, name: 'NestJS A', gender: 'Male'},
        {id: 1, name: 'NestJS B', gender: 'Female'}
    ];

    getNestjs(gender?: 'Male' | 'Female') {
        if (gender) {
            return this.nestjs.filter((item) => item.gender === gender);
        }

        return this.nestjs;
    }
}
