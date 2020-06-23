import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('AccessToken', { synchronize: false })
export class AccessToken extends BaseEntity {
    @PrimaryColumn({ name: 'id' })
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'token' })
    token: string;

    @Column({ name: 'is_revoked' })
    isRevoked: string;

    @Column({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'modified_at' })
    modifiedAt: Date;
}
