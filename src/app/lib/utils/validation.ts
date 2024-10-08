export const validateCategories = (selectedCategories: string[]): boolean => {
    if (selectedCategories.length === 0) {
      return false;
    }
    return true;
  };
  