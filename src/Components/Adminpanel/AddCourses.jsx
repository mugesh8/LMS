import React, { useState } from 'react';

const AddCourses = () => {
  const [formData, setFormData] = useState({
    courseImage: null,
    courseVideo: null,
    courseTitle: '',
    parentCategory: '',
    courseDescription: '',
    coursePrice: '',
    timeSpend: '',
    requirements: '',
    learningOutcomes: '',
    targetAudience: '',
    courseLanguage: '',
    lectureTitle: '',
    lectureOutcome: '',
    lectureImage: null,
    lectureVideo: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  return (
    <div className="container p-4">
      <form onSubmit={handleSubmit}>
        <h2>Add Course</h2>
        
        <div className="mb-3">
          <label className="form-label">Course Image upload(.jpg,.png,.jpeg)</label>
          <input 
            type="file" 
            className="form-control"
            name="courseImage"
            accept=".jpg,.png,.jpeg"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course Preview video upload(.mp4)</label>
          <input 
            type="file" 
            className="form-control"
            name="courseVideo"
            accept=".mp4"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course Title</label>
          <input 
            type="text" 
            className="form-control"
            name="courseTitle"
            placeholder="Course Name"
            value={formData.courseTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Parent Category</label>
          <select 
            className="form-select"
            name="parentCategory"
            value={formData.parentCategory}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="programming">Programming</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Course Description</label>
          <textarea 
            className="form-control"
            name="courseDescription"
            rows="6"
            value={formData.courseDescription}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course Price</label>
          <div className="input-group">
            <input 
              type="text" 
              className="form-control"
              name="coursePrice"
              placeholder="Course Price"
              value={formData.coursePrice}
              onChange={handleChange}
            />
            <span className="input-group-text">USD</span>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">How much time spend</label>
          <input 
            type="text" 
            className="form-control"
            name="timeSpend"
            placeholder="How much time spend"
            value={formData.timeSpend}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Requirement or Prerequisites for taking your course</label>
          <textarea 
            className="form-control"
            name="requirements"
            rows="4"
            value={formData.requirements}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">What Student will learn after completion</label>
          <textarea 
            className="form-control"
            name="learningOutcomes"
            rows="4"
            value={formData.learningOutcomes}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Who is this course for</label>
          <select 
            className="form-select"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
          >
            <option value="">Select Course For</option>
            <option value="beginners">Beginners</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Course Language</label>
          <select 
            className="form-select"
            name="courseLanguage"
            value={formData.courseLanguage}
            onChange={handleChange}
          >
            <option value="">Select Course Language</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
        </div>

        <div className="mb-4">
          <h3>Add Lectures</h3>
          <button type="button" className="btn btn-success">Add Lecture</button>
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control"
            name="lectureTitle"
            placeholder="Title"
            value={formData.lectureTitle}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">What will Students do at the end of the Lecture</label>
          <textarea 
            className="form-control"
            name="lectureOutcome"
            rows="4"
            value={formData.lectureOutcome}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Lecture Image</label>
          <input 
            type="file" 
            className="form-control"
            name="lectureImage"
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Lecture Video</label>
          <input 
            type="file" 
            className="form-control"
            name="lectureVideo"
            onChange={handleFileChange}
          />
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default AddCourses;