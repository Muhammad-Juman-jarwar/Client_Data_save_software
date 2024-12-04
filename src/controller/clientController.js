// import { Request, Response } from "express";
// import Client from "../model/clientSchema"; // Sequelize Client model

// // Add a new client
// export const addClient = async (req, res) => {
//   try {
//     const {
//       firstName,
//       middleName,
//       lastName,
//       email,
//       emailPassword,
//       dateOfBirth,
//       ssn,
//       phoneNumber,
//       address,
//       city,
//       state,
//       zip,
//       driverLicense,
//       driverLicenseIssueDate,
//       driverLicenseExpiryDate,
//       driverLicenseIssueState,
//       occupation,
//       yearlyIncome,
//       monthlyHousingRent,
//       creditScore,
//       gender,
//       notes,
//       status,
//     } = req.body;

//     // Check for duplicate email or SSN
//     const existingClientByEmail = await Client.findOne({ where: { email } });
//     const existingClientBySSN = await Client.findOne({ where: { ssn } });

//     if (existingClientByEmail) {
//       return res
//         .status(400)
//         .json({ message: "Client with this email already exists." });
//     }

//     if (existingClientBySSN) {
//       return res
//         .status(400)
//         .json({ message: "Client with this SSN already exists." });
//     }

//     // Create a new client
//     const newClient = await Client.create({
//       firstName,
//       middleName,
//       lastName,
//       email,
//       emailPassword,
//       dateOfBirth,
//       ssn,
//       phoneNumber,
//       address,
//       city,
//       state,
//       zip,
//       driverLicense,
//       driverLicenseIssueDate,
//       driverLicenseExpiryDate,
//       driverLicenseIssueState,
//       occupation,
//       yearlyIncome,
//       monthlyHousingRent,
//       creditScore,
//       gender,
//       notes,
//       status,
//     });

//     return res.status(201).json({
//       message: "Client added successfully",
//       client: newClient,
//     });
//   } catch (error) {
//     console.error("Error adding client:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // Get all clients
// export const getAllClients = async (req, res) => {
//   try {
//     const clients = await Client.findAll({
//       order: [["updatedAt", "DESC"]],
//     });

//     return res.status(200).json({
//       message: "Clients fetched successfully",
//       clients,
//     });
//   } catch (error) {
//     console.error("Error fetching clients:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // Get a client by ID
// export const getClientById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const client = await Client.findByPk(id);

//     if (!client) {
//       return res.status(404).json({ message: "Client not found." });
//     }

//     return res.status(200).json({
//       message: "Client fetched successfully",
//       client,
//     });
//   } catch (error) {
//     console.error("Error fetching client:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // Update a client
// export const updateClient = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find the client
//     const client = await Client.findByPk(id);
//     if (!client) {
//       return res.status(404).json({ message: "Client not found." });
//     }

//     // Update client data
//     await client.update(req.body);

//     return res.status(200).json({
//       message: "Client updated successfully",
//       client,
//     });
//   } catch (error) {
//     console.error("Error updating client:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

// // Delete a client
// export const deleteClient = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find and delete the client by ID
//     const client = await Client.findByPk(id);
//     if (!client) {
//       return res.status(404).json({ message: "Client not found." });
//     }

//     await client.destroy();

//     return res.status(200).json({
//       message: "Client deleted successfully",
//       client,
//     });
//   } catch (error) {
//     console.error("Error deleting client:", error);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

const Client = require("../model/clientSchema"); // Sequelize Client model

// Add a new client
const addClient = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      emailPassword,
      dateOfBirth,
      ssn,
      phoneNumber,
      address,
      city,
      state,
      zip,
      driverLicense,
      driverLicenseIssueDate,
      driverLicenseExpiryDate,
      driverLicenseIssueState,
      occupation,
      yearlyIncome,
      monthlyHousingRent,
      creditScore,
      gender,
      notes,
      status,
    } = req.body;

    // Check for duplicate email or SSN
    const existingClientByEmail = await Client.findOne({ where: { email } });
    const existingClientBySSN = await Client.findOne({ where: { ssn } });

    if (existingClientByEmail) {
      return res
        .status(400)
        .json({ message: "Client with this email already exists." });
    }

    if (existingClientBySSN) {
      return res
        .status(400)
        .json({ message: "Client with this SSN already exists." });
    }

    // Create a new client
    const newClient = await Client.create({
      firstName,
      middleName,
      lastName,
      email,
      emailPassword,
      dateOfBirth,
      ssn,
      phoneNumber,
      address,
      city,
      state,
      zip,
      driverLicense,
      driverLicenseIssueDate,
      driverLicenseExpiryDate,
      driverLicenseIssueState,
      occupation,
      yearlyIncome,
      monthlyHousingRent,
      creditScore,
      gender,
      notes,
      status,
    });

    return res.status(201).json({
      message: "Client added successfully",
      client: newClient,
    });
  } catch (error) {
    console.error("Error adding client:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get all clients
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.findAll({
      order: [["updatedAt", "DESC"]],
    });

    return res.status(200).json({
      message: "Clients fetched successfully",
      clients,
    });
  } catch (error) {
    console.error("Error fetching clients:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get a client by ID
const getClientById = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Client.findByPk(id);

    if (!client) {
      return res.status(404).json({ message: "Client not found." });
    }

    return res.status(200).json({
      message: "Client fetched successfully",
      client,
    });
  } catch (error) {
    console.error("Error fetching client:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Update a client
const updateClient = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the client
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found." });
    }

    // Update client data
    await client.update(req.body);

    return res.status(200).json({
      message: "Client updated successfully",
      client,
    });
  } catch (error) {
    console.error("Error updating client:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Delete a client
const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the client by ID
    const client = await Client.findByPk(id);
    if (!client) {
      return res.status(404).json({ message: "Client not found." });
    }

    await client.destroy();

    return res.status(200).json({
      message: "Client deleted successfully",
      client,
    });
  } catch (error) {
    console.error("Error deleting client:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
