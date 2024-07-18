import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import express from 'express';


export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
     const job = await Job.create( req.body )
     res.status(StatusCodes.CREATED).json({ job })
};

export const getJob = async (req, res) => {

  const job = await Job.findById(req.params.id)
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob });
};



// if (!company || !position) {
//     res.status(400).json({ msg: 'please provide company and position' });
//     return;
//   }
//   const id = nanoid(10);
//   const job = { id, company, position };
//   jobs.push(job)