import req from "express/lib/request";
import { Customer } from "./models.js";

export const CustomerController = {
  readAll: async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: "Hubungi Admin" });
    }
  },
  readById: async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: "Hubungi Admin" });
    }
  },
  save: async (req, res) => {
    try {
      const customer = await new Customer(req.body);
      await customer.save();
      res.status(201).json({ message: "Berhasil menyimpan data" });
    } catch (error) {
      res.status(500).json({ message: "Hubungi Admin" });
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const check = await Customer.findById(id);
      if (!check)
        return res.status(401).json({ message: "please contact admin" });
      await Customer.updateOne({ _id: id }, { $set: req.body });
      res.status(200).json({ message: "Berhasil di ubah" });
    } catch (error) {
      res.status(500).json({ message: "Hubungi Admin" });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const check = await Customer.findById(id);
      if (!check)
        return res.status(401).json({ message: "Customer not found" });
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ message: "Berhasil" });
    } catch (error) {
      res.status(500).json({ message: "Hubungi Admin" });
    }
  },
};

export const ItemController = {
  readAll: async (req, res) => {
    try {
    } catch (error) {}
  },
  readById: async (req, res) => {
    try {
    } catch (error) {}
  },
  save: async (req, res) => {
    try {
    } catch (error) {}
  },
  update: async (req, res) => {
    try {
    } catch (error) {}
  },

  delete: async (req, res) => {
    try {
    } catch (error) {}
  },
};

export const Transaction = {
  readAll: async (req, res) => {
    try {
    } catch (error) {}
  },

  readById: async (req, res) => {
    try {
    } catch (error) {}
  },

  save: async (req, res) => {
    try {
    } catch (error) {}
  },

  update: async (req, res) => {
    try {
    } catch (error) {}
  },

  delete: async (req, res) => {
    try {
    } catch (error) {}
  },
};

export const TransactionDetail = {
  readAll: async (req, res) => {
    try {
    } catch (error) {}
  },

  readById: async (req, res) => {
    try {
    } catch (error) {}
  },

  save: async (req, res) => {
    try {
    } catch (error) {}
  },

  update: async (req, res) => {
    try {
    } catch (error) {}
  },

  delete: async (req, res) => {
    try {
    } catch (error) {}
  },
};
