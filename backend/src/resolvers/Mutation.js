const Mutations = {
  async createHabit(parent, args, ctx, info) {
    const habit = await ctx.db.mutation.createHabit(
      {
        data: {
          ...args,
        },
      },
      info
    );

    return habit;
  },
};

module.exports = Mutations;
