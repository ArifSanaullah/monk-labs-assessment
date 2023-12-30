export interface Label {
  [key: string]: string | undefined | null;
}

export interface MenuItem {
  id: string;
  createdDate?: string;
  lastUpdated?: string;
  options?: Partial<Option>[];
  optionSets?: Partial<Option>[];
  notTaxable?: boolean;
  merchantId?: string;
  backgroundPic?: string;
  profilePic?: string;
  calories?: number;
  name: Label;
  description?: Label;
  price: number;
  discounts?: Partial<Discount>[];
  isHidden?: boolean;
  taxable?: boolean;
  quantity?: number;
}

export interface Option {
  id: string;
  createdDate: string;
  availability: {
    isHidden: boolean;
    isAvailableNow: boolean;
    isUnAvailable: boolean;
  };
  items: unknown[]; // Type is unclear from the provided data
  saveOptionItems: boolean;
  enableMinimumSelections: boolean;
  enableMaximumSelections: boolean;
  someOptionsUnavailable: boolean;
  optionsCount: number;
  menusCount: number;
  optionSetsCount: number;
  categoriesCount: number;
  entityType: string;
  isHidden: boolean;
}

export interface Discount {
  id: string;
  createdDate: string;
  orderTypes: string[];
}
