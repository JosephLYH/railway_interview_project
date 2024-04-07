import 'dotenv/config';
declare const prd_spin_up: (req: any, res: any) => Promise<any>;
declare const prd_spin_down: (req: any, res: any) => Promise<any>;
export { prd_spin_up, prd_spin_down };
