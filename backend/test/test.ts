import server from '../src/server';

describe('server', () => {
  it('should export an express app', () => {
    expect(server).toBeDefined();
  });

  it('should have a /spin_up route', () => {
    const routes = server._router.stack
      .filter((layer: any) => layer.route)
      .map((layer: any) => layer.route.path);
    expect(routes).toContain('/spin_up');
  });

  it('should have a /spin_down route', () => {
    const routes = server._router.stack
      .filter((layer: any) => layer.route)
      .map((layer: any) => layer.route.path);
    expect(routes).toContain('/spin_down');
  });
});
