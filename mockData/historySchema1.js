[{
  date: 70000,
  totalOrders: 40,
  avgMargin: 30,

  aggregates: {
    totalElectronics: 39,
    totalHealth: 29,
  }

  //Totals seems pretty optional.
  //The processing to get the totals out of the seller scopes
  //doesn't seem that bad...

  categoryAggregate: {
    electronics: {
      orders: 12,
      margin: 16,
      profit: 39
    },
    health: {
      orders: 12,
      margin: 16,
      profit: 39
    },
    books: {
      orders: 12,
      margin: 16,
      profit: 39
    }
  }

  amazon: {
    totalOrders: 12,
    avgMargin: 21,
    totalProfit: 238,

    electronics {
      totalOrders: 12,
      avgMargin: 21,
      totalProfit: 238,
    }

    health {
      totalOrders: 12,
      avgMargin: 21,
      totalProfit: 238,
    }

    books {
      totalOrders: 12,
      avgMargin: 21,
      totalProfit: 238,
    }
  }

}]
