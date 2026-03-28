export type WithdrawalRequest = {
    id: number;
    user_id: number;
    amount: number;
    currency: string;
    wallet_address: string;
    status: WithdrawalStatus;
    rejection_reason: string | null;
    admin_comment: string | null;
    tx_hash: string | null;
    processed_at: Date | null;
    created_at: Date;
    updated_at: Date;
}

export type WithdrawalStatus = 'PENDING' | 'APPROVED' | 'REJECTED';