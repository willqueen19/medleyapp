
            mens

            if (collection === surveyConstants.premium_quality) {
                itemsForCollection = [shirts, pants, outerwear, shoes, accessories];
            } else if (collection === surveyConstants.modern_classic) {
                itemsForCollection = [shirts, pants, outerwear];
            } else if (collection === surveyConstants.conscious) {
                itemsForCollection = [shirts, pants, outerwear];
            } else if (collection === surveyConstants.hm_men) {
                //TODO this can be removed
                itemsForCollection = [shirts, pants, outerwear];
            } else if (collection === surveyConstants.trend) {
                itemsForCollection = [shirts, pants, outerwear, shoes, accessories];
            } else if (collection === surveyConstants.divided) {
                itemsForCollection = [shirts, pants, outerwear];
            } else if (collection === surveyConstants.logg) {
                itemsForCollection = [shirts, pants];
            } else if (collection === surveyConstants.basics) {
                itemsForCollection = [shirts, pants];
            }
            
            womens
            
            if (collection === surveyConstants.party) {
                itemsForCollection = mainItems.concat([outerwear, shoes]);
            } else if (collection === surveyConstants.modern_classic) {
                itemsForCollection = mainItems.concat([outerwear]);
            } else if (collection === surveyConstants.conscious) {
                itemsForCollection = mainItems.concat([outerwear, accessories]);
            } else if (collection === surveyConstants.premium_quality) {
                itemsForCollection = mainItems.concat([outerwear, shoes, accessories]);
            } else if (collection === surveyConstants.trend) {
                itemsForCollection = mainItems.concat([outerwear, shoes, accessories]);
            } else if (collection === surveyConstants.divided) {
                itemsForCollection = mainItems.concat([outerwear, shoes, accessories]);
            } else if (collection === surveyConstants.logg) {
                itemsForCollection = mainItems.concat([outerwear]);
            }