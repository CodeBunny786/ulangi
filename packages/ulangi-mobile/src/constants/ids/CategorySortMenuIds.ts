/*
 * Copyright (c) Minh Loi.
 *
 * This file is part of Ulangi which is released under GPL v3.0.
 * See LICENSE or go to https://www.gnu.org/licenses/gpl-3.0.txt
 */

import { CategorySortType } from '@ulangi/ulangi-common/enums';

export const CategorySortMenuIds = {
  SORT_MENU: 'CATEGORY_SORT_MENU',
  SORT_BTN_BY_SORT_TYPE: (sortType: CategorySortType): string =>
    'SORT_BTN_BY_SORT_TYPE_' + sortType,
};
