import("node-fetch").then(({ default: fetch }) => {
      // Configuration Section
        const API_KEY = emtmyv1h71upuujq6dvmyuba9nvpwmv56gqmpck1attqgktjdn2pyutpa5wq0nknat75jhj4d136pja46524pman6wnqmh328xn6em3r8d6qgxjae5x6av2b914mjk2hb9wmghv384ykudtu5cu3r9hgjptumdh470cvdd4a5j32jtj9xmjpmbmf4tmex9k6x734kj56nvkuf8
          const TOKEN_MINT = FEj3KUtAXJoRHpStA5k5RxVpAHJuk8eUQ4WqpMyupump
            const BUY_AMOUNT = 0.0013; //
              const TIME_BETWEEN_BUYS = 5000; // 5 seconds
                const TIME_BEFORE_SELL = 10000; // 10 seconds
                  const TIME_AFTER_SELL = 5000; // 5 seconds 
                    const NUMBER_OF_BUYS = 3; //
                      const SLIPPAGE = 10; // 10% slippage
                        const PRIORITY_FEE = 0.0003; //
                          // End Configuration Section
                            async function buy() {
                                    const response = await fetch(
                                              emtmyv1h71upuujq6dvmyuba9nvpwmv56gqmpck1attqgktjdn2pyutpa5wq0nknat75jhj4d136pja46524pman6wnqmh328xn6em3r8d6qgxjae5x6av2b914mjk2hb9wmghv384ykudtu5cu3r9hgjptumdh470cvdd4a5j32jtj9xmjpmbmf4tmex9k6x734kj56nvkuf8,
                                                    {
                                                                method: "POST",
                                                                        headers: {
                                                                                      "Content-Type": "application/json",
                                                                        },
                                                                                body: JSON.stringify({
                                                                                              action: "buy",
                                                                                                        mint: TOKEN_MINT,
                                                                                                                  amount: BUY_AMOUNT,
                                                                                                                            denominatedInSol: "true",
                                                                                                                                      slippage: SLIPPAGE,
                                                                                                                                                priorityFee: PRIORITY_FEE,
                                                                                                                                                          pool: "pump",
                                                                                }),
                                                    }
                                    );
                                        const data = await response.json();
                                            console.log("BUY transaction:", data);
                                                return data;
                            }
                              async function sell() {
                                    const response = await fetch(
                                              emtmyv1h71upuujq6dvmyuba9nvpwmv56gqmpck1attqgktjdn2pyutpa5wq0nknat75jhj4d136pja46524pman6wnqmh328xn6em3r8d6qgxjae5x6av2b914mjk2hb9wmghv384ykudtu5cu3r9hgjptumdh470cvdd4a5j32jtj9xmjpmbmf4tmex9k6x734kj56nvkuf8,
                                                    {
                                                                method: "POST",
                                                                        headers: {
                                                                                      "Content-Type": "application/json",
                                                                        },
                                                                                body: JSON.stringify({
                                                                                              action: "sell",
                                                                                                        mint: TOKEN_MINT,
                                                                                                                  amount: "100%",
                                                                                                                            denominatedInSol: "false",
                                                                                                                                      slippage: SLIPPAGE,
                                                                                                                                                priorityFee: PRIORITY_FEE,
                                                                                                                                                          pool: "pump",
                                                                                }),
                                                    }
                                    );
                                        const data = await response.json();
                                            console.log("SELL transaction:", data);
                                                return data;
                              }
                                async function runBumpBot() {
                                        while (true) {
                                                  for (let i = 0; i < NUMBER_OF_BUYS; i++) {
                                                            await buy();
                                                                    await new Promise((resolve) => setTimeout(resolve, TIME_BETWEEN_BUYS));
                                                  }
                                                        await new Promise((resolve) => setTimeout(resolve, TIME_BEFORE_SELL));
                                                              await sell();
                                                                    await new Promise((resolve) => setTimeout(resolve, TIME_AFTER_SELL));
                                        }
                                }
                                  runBumpBot().catch(console.error);
});
                                                  }
                                        }
                                }
                                                                                })
                                                                        }
                                                    }
                                    )
                              }
                                                                                })
                                                                        }
                                                    }
                                    )
                            }
})
