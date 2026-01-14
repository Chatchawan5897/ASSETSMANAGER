import { AppDataSource } from '../data-source';
import { Permission } from '../../modules/master-data/permissions/entities/permission.entity';

export async function seedPermissions() {
  const permissionRepo = AppDataSource.getRepository(Permission);

  const permissions = [
    // Asset
    {
      code: 'asset.read',
      name: 'Read Asset',
      resource: 'asset',
      action: 'read',
    },
    {
      code: 'asset.create',
      name: 'Create Asset',
      resource: 'asset',
      action: 'create',
    },
    {
      code: 'asset.update',
      name: 'Update Asset',
      resource: 'asset',
      action: 'update',
    },
    {
      code: 'asset.delete',
      name: 'Delete Asset',
      resource: 'asset',
      action: 'delete',
    },
    {
      code: 'asset.assign',
      name: 'Assign Asset',
      resource: 'asset',
      action: 'assign',
    },

    // Asset Request
    {
      code: 'asset_request.read',
      name: 'Read Asset Request',
      resource: 'asset_request',
      action: 'read',
    },
    {
      code: 'asset_request.create',
      name: 'Create Asset Request',
      resource: 'asset_request',
      action: 'create',
    },
    {
      code: 'asset_request.approve',
      name: 'Approve Asset Request',
      resource: 'asset_request',
      action: 'approve',
    },
    {
      code: 'asset_request.reject',
      name: 'Reject Asset Request',
      resource: 'asset_request',
      action: 'reject',
    },
  ];

  for (const permission of permissions) {
    const exists = await permissionRepo.findOne({
      where: { code: permission.code },
    });

    if (!exists) {
      await permissionRepo.save(permissionRepo.create(permission));
    }
  }
}
