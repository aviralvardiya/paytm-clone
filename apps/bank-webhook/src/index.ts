import prisma from "@repo/db/client";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "welcome bhai!!" });
});

app.post("/hdfcWebhook", async (req, res) => {
  //TODO: Add zod validation here?
  const paymentInformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };

  try {
    await prisma.$transaction([
      prisma.balance.update({
        where: {
          userId: paymentInformation.userId,
        },
        data: {
          amount: {
            increment: paymentInformation.amount,
          },
        },
      }),
      prisma.onRampTransaction.update({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({
      message: "Captured",
    });
  } catch (error) {
    console.log(error);
    res.status(411).json({
      message: "Error while processing at webhook",
    });
  }
});

app.listen(8000, () => {
  console.log("bank webhook listening on port 8000");
});
