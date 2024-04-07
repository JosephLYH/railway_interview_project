import 'dotenv/config';
declare const dev_spin_up: (req: any, res: any) => Promise<any>;
declare const dev_spin_down: (req: any, res: any) => any;
export { dev_spin_up, dev_spin_down };
